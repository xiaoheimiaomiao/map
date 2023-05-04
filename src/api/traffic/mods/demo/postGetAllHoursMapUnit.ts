/**
         * @desc 获取模型预测下图层全时段地图单位
获取模型预测下图层全时段地图单位
         */

import { RequestConfig, request } from 'umi';

type TResp = {
  data: Array<defs.traffic.HourLayerMapUnitVO>;
  success: boolean;
  code: number;
  message: string;
};
function req(
  data: defs.traffic.LayerMapUnitParam,
  config: Omit<RequestConfig, 'data' | 'params'> = {},
): Promise<TResp> {
  return request<TResp>(`/traffic/demo/getAllHoursMapUnit`, {
    data,
    method: 'post',
    ...(config || {}),
  });
}
req.req = {} as defs.traffic.LayerMapUnitParam;
req.resp = {} as TResp['data'];
req.path = `/traffic/demo/getAllHoursMapUnit`;
export default req;
