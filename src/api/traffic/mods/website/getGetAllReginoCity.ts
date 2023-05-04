/**
         * @desc 获取全国大区与城市信息
获取全国大区与城市信息
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.RegionCityVO>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  useless?: any,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/website/getAllReginoCity`, {
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as unknown;
req.resp = {} as TResp['data'];
req.path = `/traffic/website/getAllReginoCity`;
export default req;
