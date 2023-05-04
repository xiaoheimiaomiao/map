/**
         * @desc 通过一级分类获取二级分类图层
通过一级分类获取二级分类图层
         */

import { RequestConfig, request } from 'umi';
export interface Params {
  /** 一级分类标识 */
  layerTypeFirst?: number;
}

type TResp = {
  data: Array<defs.traffic.TheLayerDisplayData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  params: Params,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getSecondLayer`, {
    params,
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as Params;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getSecondLayer`;
export default req;
