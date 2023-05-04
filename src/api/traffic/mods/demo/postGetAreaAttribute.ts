/**
         * @desc 获取区域特殊属性
获取区域特殊属性
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: defs.traffic.AreaAttributeVO;
  success: boolean;
  code: number;
  message: string;
};
function req(
  data: defs.traffic.AreaAttributeParam,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getAreaAttribute`, {
    data,
    method: 'post',
    ...(config || {}),
  });
}
req.req = {} as defs.traffic.AreaAttributeParam;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getAreaAttribute`;
export default req;
