/**
         * @desc 获取出参一级分类图层
获取出参一级分类图层
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.TheLayerDisplayData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  useless?: any,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getOutputFirstLayer`, {
    method: 'get',
    ...(config || {}),
  });
}
req.req = {} as unknown;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getOutputFirstLayer`;
export default req;
