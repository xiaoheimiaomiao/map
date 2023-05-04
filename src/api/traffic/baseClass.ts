class AreaAttributeParam {
  /** 城市区域ID */
  areaId = undefined;

  /** 所属数据集 */
  dataCollectionName = '';
}

class AreaAttributeVO {
  /** amountOut */
  amountOut = undefined;

  /** amountPopulation */
  amountPopulation = undefined;

  /** amountStation */
  amountStation = undefined;
}

class AreaDataCollectionVO {
  /** 数据集名称 */
  dataCollection = '';

  /** 数据集说明(此字段判断是否展示说明) */
  note = '';
}

class DistanceStatisticsVO {
  /** 出行距离(横坐标) */
  distance = undefined;

  /** 分组标识 */
  groupSign = '';

  /** 距离总量(纵坐标) */
  total = undefined;
}

class HourLayerMapUnitVO {
  /** hour */
  hour = undefined;

  /** units */
  units = [];
}

class LayerImageParam {
  /** 城市行政区域编码 */
  cityAdcode = '';

  /** 城市名称 */
  cityName = '';

  /** 网站模块(1-入参模块;2-预测模块) */
  siteModule = undefined;
}

class LayerMapUnitParam {
  /** 城市区域ID */
  areaId = undefined;

  /** 城市ID */
  cityId = undefined;

  /** 所属数据集 */
  collection = '';

  /** 经纬度对象geojson */
  coordinates = '';

  /** 图层ID */
  layerId = undefined;

  /** 单位时间点 */
  unitTime = undefined;

  /** 更新状态 */
  updateStatus = undefined;
}

class MapBaseUnitDisplayData {
  /** 坐标明细 */
  coordinates = '';

  /** 单位展示详情 */
  detail = '';

  /** 单位图标 */
  logo = '';

  /** 单位名称 */
  unitName = '';

  /** 单位权重（用于地图处理，可代表高度、热度等） */
  weight = undefined;
}

class RegionCityVO {
  /** cities */
  cities = [];

  /** region */
  region = '';
}

class TheLayerDisplayData {
  /** 颜色 */
  color = '';

  /** 图层ID */
  id = undefined;

  /** 图层名称 */
  layerName = '';

  /** 一级图层分类 */
  layerTypeFirst = undefined;

  /** 二级图层分类 */
  layerTypeSecond = undefined;

  /** 图标 */
  logo = '';

  /** 地图图层样式类型 */
  mapLayerStyleType = undefined;

  /** 备注说明 */
  note = '';
}

class TheLayerDisplayImageData {
  /** 城市行政区域编码 */
  cityAdcode = '';

  /** 城市名称 */
  cityName = '';

  /** 图片信息 */
  image = '';

  /** 图片信息(模型1) */
  imageDetailFirst = '';

  /** 图片信息(模型2) */
  imageDetailSecond = '';

  /** 图层名称 */
  layerName = '';

  /** 备注说明 */
  note = '';

  /** 排序信息 */
  sort = undefined;
}

class UrbanAreasShowTheData {
  /** 面积 */
  acreage = undefined;

  /** 吸引量 */
  amountIn = undefined;

  /** 出行量 */
  amountOut = undefined;

  /** 人口数量 */
  amountPopulation = undefined;

  /** 岗位数量 */
  amountStation = undefined;

  /** 区域名称(数据为城市级别是，字段为空) */
  areaName = '';

  /** 区域平均出行距离 */
  averageDistance = undefined;

  /** 边界（geojson格式） */
  boundary = '';

  /** 建筑量 */
  build = undefined;

  /** 中心位置坐标值 */
  centerCoordinate = '';

  /** 城市编码 */
  cityAdcode = '';

  /** 城市名称 */
  cityName = '';

  /** 颜色 */
  color = '';

  /** id */
  id = undefined;

  /** 城市区域级别（1：城市；2：区域） */
  level = undefined;

  /** 地图样式类型 */
  mapStyleType = undefined;

  /** 透明度 */
  opacity = undefined;

  /** 父级ID(数据为城市级别是，字段为空) */
  parentId = undefined;
}

export const traffic = {
  AreaAttributeParam,
  AreaAttributeVO,
  AreaDataCollectionVO,
  DistanceStatisticsVO,
  HourLayerMapUnitVO,
  LayerImageParam,
  LayerMapUnitParam,
  MapBaseUnitDisplayData,
  RegionCityVO,
  TheLayerDisplayData,
  TheLayerDisplayImageData,
  UrbanAreasShowTheData,
};
