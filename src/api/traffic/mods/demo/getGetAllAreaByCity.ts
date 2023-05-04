/**
         * @desc 通过城市获取区域
通过城市获取区域
         */

import { RequestConfig, request } from 'umi';
export interface Params {
  /** 区域父级ID */
  parentId?: number;
}

type TResp = {
  data: Array<defs.traffic.UrbanAreasShowTheData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  params: Params,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getAllAreaByCity`, {
    params,
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as Params;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getAllAreaByCity`;
export default req;
