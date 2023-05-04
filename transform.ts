import { StandardDataSource } from 'pont-engine';

const whites: {
  /** 数据源 */
  [datasource: string]:
    | {
        /** mod: ture 表示当前 mod 下全部, inter.name[] 则表示只取列表中的  */
        [modname: string]: true | string[];
      }
    | true;
} = {
  map: true,
  admin: {
    area: ['postSelf', 'postSysSelf'],
    user: ['getInfo'],
    menu: ['postList'],
  },
};

export default function (dataSource: StandardDataSource): StandardDataSource {
  const allowed = whites[dataSource.name];

  if (typeof allowed === 'object') {
    dataSource.mods = dataSource.mods.filter((mod) => {
      const modAllowes = allowed[mod.name];
      const isModAllowes = !!modAllowes;
      if (!isModAllowes) return false;
      if (Array.isArray(modAllowes)) {
        mod.interfaces = mod.interfaces.filter((inter) => {
          return modAllowes.includes(inter.name);
        });
      }
      return true;
    });
  }

  return dataSource;
}
