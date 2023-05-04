/**
         * @desc 通过区域获取出行距离数据
通过区域获取出行距离数据
         */

import { RequestConfig, request } from 'umi';
export interface Params {
  /** 区域ID */
  areaId?: number;
}

type TResp = {
  data: Array<defs.traffic.DistanceStatisticsVO>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  params: Params,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getDistanceByArea`, {
    params,
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as Params;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getDistanceByArea`;
export default req;
