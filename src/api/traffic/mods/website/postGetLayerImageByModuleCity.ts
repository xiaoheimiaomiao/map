/**
         * @desc 通过城市名称与站点模块获取图层图片列表
通过城市名称与站点模块获取图层图片列表
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.TheLayerDisplayImageData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  data: defs.traffic.LayerImageParam,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/website/getLayerImageByModuleCity`, {
    data,
    method: 'post',
    ...(config || {}),
  });
}
req.req = {} as defs.traffic.LayerImageParam;
req.resp = {} as TResp['data'];
req.path = `/traffic/website/getLayerImageByModuleCity`;
export default req;
