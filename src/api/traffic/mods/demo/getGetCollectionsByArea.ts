/**
         * @desc 获取当前区域数据集
获取当前区域数据集
         */

import { RequestConfig, request } from 'umi';
export interface Params {
  /** 区域ID */
  areaId?: number;
}

type TResp = {
  data: Array<defs.traffic.AreaDataCollectionVO>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  params: Params,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getCollectionsByArea`, {
    params,
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as Params;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getCollectionsByArea`;
export default req;
