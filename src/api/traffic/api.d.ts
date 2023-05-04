type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace traffic {
    export class AreaAttributeParam {
      /** 城市区域ID */
      areaId?: number;

      /** 所属数据集 */
      dataCollectionName?: string;
    }

    export class AreaAttributeVO {
      /** amountOut */
      amountOut?: number;

      /** amountPopulation */
      amountPopulation?: number;

      /** amountStation */
      amountStation?: number;
    }

    export class AreaDataCollectionVO {
      /** 数据集名称 */
      dataCollection?: string;

      /** 数据集说明(此字段判断是否展示说明) */
      note?: string;
    }

    export class DistanceStatisticsVO {
      /** 出行距离(横坐标) */
      distance?: number;

      /** 分组标识 */
      groupSign?: string;

      /** 距离总量(纵坐标) */
      total?: number;
    }

    export class HourLayerMapUnitVO {
      /** hour */
      hour?: number;

      /** units */
      units?: Array<defs.traffic.MapBaseUnitDisplayData>;
    }

    export class LayerImageParam {
      /** 城市行政区域编码 */
      cityAdcode?: string;

      /** 城市名称 */
      cityName?: string;

      /** 网站模块(1-入参模块;2-预测模块) */
      siteModule?: number;
    }

    export class LayerMapUnitParam {
      /** 城市区域ID */
      areaId?: number;

      /** 城市ID */
      cityId?: number;

      /** 所属数据集 */
      collection?: string;

      /** 经纬度对象geojson */
      coordinates?: string;

      /** 图层ID */
      layerId?: number;

      /** 单位时间点 */
      unitTime?: number;

      /** 更新状态 */
      updateStatus?: number;
    }

    export class MapBaseUnitDisplayData {
      /** 坐标明细 */
      coordinates?: string;

      /** 单位展示详情 */
      detail?: string;

      /** 单位图标 */
      logo?: string;

      /** 单位名称 */
      unitName?: string;

      /** 单位权重（用于地图处理，可代表高度、热度等） */
      weight?: number;
    }

    export class RegionCityVO {
      /** cities */
      cities?: Array<defs.traffic.UrbanAreasShowTheData>;

      /** region */
      region?: string;
    }

    export class TheLayerDisplayData {
      /** 颜色 */
      color?: string;

      /** 图层ID */
      id?: number;

      /** 图层名称 */
      layerName?: string;

      /** 一级图层分类 */
      layerTypeFirst?: number;

      /** 二级图层分类 */
      layerTypeSecond?: number;

      /** 图标 */
      logo?: string;

      /** 地图图层样式类型 */
      mapLayerStyleType?: number;

      /** 备注说明 */
      note?: string;
    }

    export class TheLayerDisplayImageData {
      /** 城市行政区域编码 */
      cityAdcode?: string;

      /** 城市名称 */
      cityName?: string;

      /** 图片信息 */
      image?: string;

      /** 图片信息(模型1) */
      imageDetailFirst?: string;

      /** 图片信息(模型2) */
      imageDetailSecond?: string;

      /** 图层名称 */
      layerName?: string;

      /** 备注说明 */
      note?: string;

      /** 排序信息 */
      sort?: number;
    }

    export class UrbanAreasShowTheData {
      /** 面积 */
      acreage?: number;

      /** 吸引量 */
      amountIn?: number;

      /** 出行量 */
      amountOut?: number;

      /** 人口数量 */
      amountPopulation?: number;

      /** 岗位数量 */
      amountStation?: number;

      /** 区域名称(数据为城市级别是，字段为空) */
      areaName?: string;

      /** 区域平均出行距离 */
      averageDistance?: number;

      /** 边界（geojson格式） */
      boundary?: string;

      /** 建筑量 */
      build?: number;

      /** 中心位置坐标值 */
      centerCoordinate?: string;

      /** 城市编码 */
      cityAdcode?: string;

      /** 城市名称 */
      cityName?: string;

      /** 颜色 */
      color?: string;

      /** id */
      id?: number;

      /** 城市区域级别（1：城市；2：区域） */
      level?: number;

      /** 地图样式类型 */
      mapStyleType?: number;

      /** 透明度 */
      opacity?: number;

      /** 父级ID(数据为城市级别是，字段为空) */
      parentId?: number;
    }
  }
}

declare namespace API {
  export namespace traffic {
    /**
     * 地图DEMO控制器
     */
    export namespace demo {
      /**
        * 通过城市获取区域
通过城市获取区域
        * /demo/getAllAreaByCity
        */
      export namespace getGetAllAreaByCity {
        export class Params {
          /** 区域父级ID */
          parentId?: number;
        }

        export type Response = Array<defs.traffic.UrbanAreasShowTheData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.UrbanAreasShowTheData>>;
      }

      /**
        * 获取全部城市
获取全部城市
        * /demo/getAllCity
        */
      export namespace getGetAllCity {
        export class Params {}

        export type Response = Array<defs.traffic.UrbanAreasShowTheData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.UrbanAreasShowTheData>>;
      }

      /**
        * 获取所有一级分类图层
获取入参一级分类图层
        * /demo/getAllFirstLayer
        */
      export namespace getGetAllFirstLayer {
        export class Params {}

        export type Response = Array<defs.traffic.TheLayerDisplayData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.TheLayerDisplayData>>;
      }

      /**
        * 获取模型预测下图层全时段地图单位
获取模型预测下图层全时段地图单位
        * /demo/getAllHoursMapUnit
        */
      export namespace postGetAllHoursMapUnit {
        export class Params {}

        export type Response = Array<defs.traffic.HourLayerMapUnitVO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.traffic.LayerMapUnitParam,
        ): Promise<Array<defs.traffic.HourLayerMapUnitVO>>;
      }

      /**
        * 获取图层下的全部地图单位数据
获取图层下的全部地图单位数据
        * /demo/getAllMapUnitByLayer
        */
      export namespace postGetAllMapUnitByLayer {
        export class Params {}

        export type Response = Array<defs.traffic.MapBaseUnitDisplayData>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.traffic.LayerMapUnitParam,
        ): Promise<Array<defs.traffic.MapBaseUnitDisplayData>>;
      }

      /**
        * 获取区域特殊属性
获取区域特殊属性
        * /demo/getAreaAttribute
        */
      export namespace postGetAreaAttribute {
        export class Params {}

        export type Response = defs.traffic.AreaAttributeVO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.traffic.AreaAttributeParam,
        ): Promise<defs.traffic.AreaAttributeVO>;
      }

      /**
        * 获取当前区域数据集
获取当前区域数据集
        * /demo/getCollectionsByArea
        */
      export namespace getGetCollectionsByArea {
        export class Params {
          /** 区域ID */
          areaId?: number;
        }

        export type Response = Array<defs.traffic.AreaDataCollectionVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.AreaDataCollectionVO>>;
      }

      /**
        * 通过区域获取出行距离数据
通过区域获取出行距离数据
        * /demo/getDistanceByArea
        */
      export namespace getGetDistanceByArea {
        export class Params {
          /** 区域ID */
          areaId?: number;
        }

        export type Response = Array<defs.traffic.DistanceStatisticsVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.DistanceStatisticsVO>>;
      }

      /**
        * 获取入参一级分类图层
获取入参一级分类图层
        * /demo/getFirstLayer
        */
      export namespace getGetFirstLayer {
        export class Params {}

        export type Response = Array<defs.traffic.TheLayerDisplayData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.TheLayerDisplayData>>;
      }

      /**
        * 获取出参一级分类图层
获取出参一级分类图层
        * /demo/getOutputFirstLayer
        */
      export namespace getGetOutputFirstLayer {
        export class Params {}

        export type Response = Array<defs.traffic.TheLayerDisplayData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.TheLayerDisplayData>>;
      }

      /**
        * 通过一级分类获取二级分类图层
通过一级分类获取二级分类图层
        * /demo/getSecondLayer
        */
      export namespace getGetSecondLayer {
        export class Params {
          /** 一级分类标识 */
          layerTypeFirst?: number;
        }

        export type Response = Array<defs.traffic.TheLayerDisplayData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.TheLayerDisplayData>>;
      }
    }

    /**
     * 站点控制器
     */
    export namespace website {
      /**
        * 获取全部城市
获取全部城市
        * /website/getAllCity
        */
      export namespace getGetAllCity {
        export class Params {}

        export type Response = Array<defs.traffic.UrbanAreasShowTheData>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.UrbanAreasShowTheData>>;
      }

      /**
        * 获取全国大区与城市信息
获取全国大区与城市信息
        * /website/getAllReginoCity
        */
      export namespace getGetAllReginoCity {
        export class Params {}

        export type Response = Array<defs.traffic.RegionCityVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<Array<defs.traffic.RegionCityVO>>;
      }

      /**
        * 通过城市名称与站点模块获取图层图片列表
通过城市名称与站点模块获取图层图片列表
        * /website/getLayerImageByModuleCity
        */
      export namespace postGetLayerImageByModuleCity {
        export class Params {}

        export type Response = Array<defs.traffic.TheLayerDisplayImageData>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.traffic.LayerImageParam,
        ): Promise<Array<defs.traffic.TheLayerDisplayImageData>>;
      }
    }
  }
}
