/**
         * @desc 获取全部城市
获取全部城市
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.UrbanAreasShowTheData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  useless?: any,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/website/getAllCity`, {
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as unknown;
req.resp = {} as TResp['data'];
req.path = `/traffic/website/getAllCity`;
export default req;
