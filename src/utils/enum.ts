import chuxingliang from "@/assets/svg/chuxingliang.svg";
import gangwei from "@/assets/svg/gangwei.svg";
import mianji from "@/assets/svg/mianji.svg";
import people from "@/assets/svg/people.svg";
export const RegionData: any[] = [
  {
    id: 1,
    layerName: "AOI",
    layerTypeFirst: 1,
    layerTypeSecond: null,
    mapLayerStyleType: 2,
    color: "#287cad",
    note: "查看包含135个分类的兴趣面（area of interest）数据",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/AOIicon.png",
  },
  {
    id: 6,
    layerName: "POI",
    layerTypeFirst: 2,
    layerTypeSecond: null,
    mapLayerStyleType: 3,
    color: "#32a391",
    note: "查看包含154个分类的兴趣点（Point of Interest）数据",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/POIicon.png",
  },
  {
    id: 11,
    layerName: "建筑轮廓",
    layerTypeFirst: 3,
    layerTypeSecond: null,
    mapLayerStyleType: 4,
    color: "#3259a4",
    note: "查看建筑轮廓数据",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E5%BB%BA%E7%AD%91%E8%BD%AE%E5%BB%93icon.png",
  },
  {
    id: 12,
    layerName: "人口分布",
    layerTypeFirst: 4,
    layerTypeSecond: null,
    mapLayerStyleType: 7,
    color: "rgb(238, 28, 168)",
    note: "查看常住人口空间分布",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E4%BA%BA%E5%8F%A3%E5%88%86%E5%B8%83icon.png",
  },
  {
    id: 13,
    layerName: "岗位分布",
    layerTypeFirst: 5,
    layerTypeSecond: null,
    mapLayerStyleType: 7,
    color: "rgb(216, 130, 51)",
    note: "查看常住人口岗位分布",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E5%B2%97%E4%BD%8D%E5%88%86%E5%B8%83icon.png",
  },
  {
    id: 14,
    layerName: "灯光强度",
    layerTypeFirst: 6,
    layerTypeSecond: null,
    mapLayerStyleType: 8,
    color: "rgb(250, 192, 58)",
    note: "查看城市夜晚灯光明亮程度",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E7%81%AF%E5%85%89%E5%BC%BA%E5%BA%A6icon.png",
  },
  {
    id: 15,
    layerName: "公交站点",
    layerTypeFirst: 7,
    layerTypeSecond: null,
    mapLayerStyleType: 6,
    color: "rgb(29, 179, 37)",
    note: "查看公交站点",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E5%85%AC%E4%BA%A4%E7%AB%99%E7%82%B9icon.png",
  },
  {
    id: 16,
    layerName: "地铁站点",
    layerTypeFirst: 8,
    layerTypeSecond: null,
    mapLayerStyleType: 5,
    color: "rgb(103, 13, 238)",
    note: "查看地铁站点",
    logo: "https://wyd-traffic-map.oss-cn-beijing.aliyuncs.com/map-unit/%E5%9C%B0%E9%93%81%E7%AB%99%E7%82%B9icon.png",
  },
];

export const OptionSelectData: any = {
  cityInfoList: [
    {
      title: "人口 (万)",
      value: "",
      logo: people,
    },
    {
      title: "岗位 (个)",
      value: "",
      logo: gangwei,
    },
    {
      title: "面积 (km²)",
      value: "",
      logo: mianji,
    },
    {
      title: "出行量(人次)",
      value: "",
      logo: chuxingliang,
    },
  ],
  cityName: "",
};
