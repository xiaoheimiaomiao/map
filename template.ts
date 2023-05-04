import * as Pont from 'pont-engine';

import {
  CodeGenerator,
  Interface,
  Mod,
  StandardDataSource,
  Surrounding,
} from 'pont-engine';

const API_MAP = {
  traffic: '/traffic',
};

/** 目前认为, 参数位置只会存在 path / query / body, 且不重复 */
const parseParamsCode = (inter: Interface) => {
  const queryParams = inter.parameters
    .filter((param) => param.in === 'query')
    .map((param) => param.toPropertyCode(Surrounding.typeScript, true));
  const pathParams = inter.parameters
    .filter((param) => param.in === 'path')
    .map((param) => param.toPropertyCode(Surrounding.typeScript, true));
  const bodyParam = inter.parameters.find((param) => param.in === 'body');
  const inType = {
    query: queryParams.length > 0,
    path: pathParams.length > 0,
    body: !!bodyParam,
  };
  const codes = {
    query: inType.query
      ? `
      interface Params {
        ${queryParams.join('')}
      }
      `
      : '',
    path: inType.path
      ? `
      interface PathParams {
        ${pathParams.join('')}
      }
      `
      : '',
    body: inType.body ? bodyParam.dataType.generateCode(inter.getDsName()) : '',
  };
  return [inType, codes];
};

/** 获取当前 inter 的 dataSource 名字和mod 名字 */
const findDsAndModName = (inter: Interface, dataSource: StandardDataSource) => {
  const { mods = [] } = dataSource || {};
  const myMod = mods.find((mod) => {
    return mod.interfaces.find((i) => i.name === inter.name);
  });
  return { dsName: inter.getDsName(), modName: myMod.name };
};

const withParams = (isType: ReturnType<typeof parseParamsCode>[0]) => {
  return `${isType.query ? `\nparams,` : ''}${isType.body ? `\ndata,` : ''}`;
};
const varInPath = (
  inter: Interface,
  [isType]: ReturnType<typeof parseParamsCode>,
  dsName: string,
) => {
  const path = isType.path
    ? inter.path.replace(/\{(.*?)\}/g, (target, pathParamName) => {
        return `\${${isType.body ? 'data' : 'params'}.${pathParamName}}`;
      })
    : inter.path;

  return `${API_MAP[dsName] || ''}${path}`.replace(/\s+/g, '');
};

export class FileStructures extends Pont.FileStructures {
  getDataSourcesTs() {
    // 这个 private 报错不用管
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const dsNames = this.generators.map((ge) => ge.dataSource.name);

    return `
      ${dsNames
        .map((name) => {
          return `import {  ${name}, defs as ${name}Defs } from './${name}';
          `;
        })
        .join('\n')}

      (window as any).defs = {
        ${dsNames.map((name) => `${name}: ${name}Defs,`).join('\n')}
      };
      export const Api = {
        ${dsNames.join(',\n')}
      };
      // (window as any).API = Api;
    `;
  }
}
export default class MyGenerator extends CodeGenerator {
  //   /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface) {
    const { dsName, modName } = findDsAndModName(inter, this.dataSource);
    const [type, code] = parseParamsCode(inter);

    const req = { name: '', type: '' };
    switch (true) {
      case type.path && type.query:
        req.name = 'params: ';
        req.type = 'Params & PathParams';
        break;
      case type.path && type.body:
        req.name = 'data: ';
        req.type = `${code.body} & PathParams`;
        break;
      case type.path:
        req.name = 'params: ';
        req.type = 'PathParams';
        break;
      case type.query:
        req.name = 'params: ';
        req.type = 'Params';
        break;
      case type.body:
        req.name = 'data: ';
        req.type = `${code.body}`;
        break;
      default:
        break;
    }

    const reqType = (t: string) => {
      if (!t) return 'req.req = {} as unknown';
      return `req.req = {} as ${t};`;
    };

    const first = `${req.name}${req.type}` || 'useless?: any';

    return `
        /**
         * @desc ${inter.description}
         */

        import { RequestConfig, request } from 'umi';
        ${type.query ? `export ${code.query}` : ''}
        ${type.path ? `export ${code.path}` : ''}
        type TResp = { data: ${
          inter.responseType
        }, success: boolean, code: number, message: string };
        function req(${first}, config: Omit<RequestConfig, 'data' | 'params'> = {}): Promise<TResp> {
          return request<TResp>(\`${varInPath(inter, [type, code], dsName)}\`, {
            ${withParams(type)}
            method: '${inter.method}',
            ...(config || {}),
          });
        }
        ${reqType(req.type)}
        req.resp = {} as TResp['data'];
        req.path = \`${varInPath(inter, [type, code], dsName)}\`
        export default req;
       `;
  }

  /** 获取单个模块的 index 入口文件 */
  getModIndex(mod: Mod) {
    return `
          /**
           * @description ${mod.description}
           */
          ${mod.interfaces
            .map((inter) => `import ${inter.name} from './${inter.name}';`)
            .join('\n')}

          export {
            ${mod.interfaces.map((inter) => inter.name).join(', \n')}
          }
        `;
  }

  /** 获取所有模块的 index 入口文件 */
  getModsIndex() {
    let conclusion = '';

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
            export const ${this.dataSource.name} = {
              ${this.dataSource.mods.map((mod) => mod.name).join(',\n')}
            };
          `;
    }

    return `
          ${this.dataSource.mods
            .map((mod) => {
              const modName = mod.name
                .replace(/\//g, '.')
                .replace(/^\./, '')
                .replace(/\./g, '_');
              return `import * as ${modName} from './${modName}';`;
            })
            .join('\n')}

          ${conclusion}
        `;
  }
}
