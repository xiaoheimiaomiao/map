/**
         * @desc 获取图层下的全部地图单位数据
获取图层下的全部地图单位数据
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.MapBaseUnitDisplayData>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  data: defs.traffic.LayerMapUnitParam,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getAllMapUnitByLayer`, {
    data,
    method: 'post',
    ...(config || {}),
  });
}
req.req = {} as defs.traffic.LayerMapUnitParam;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getAllMapUnitByLayer`;
export default req;
