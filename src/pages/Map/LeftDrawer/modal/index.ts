import { Layer } from "@/Component/MapContainer/LayerComponents";
import { makeAutoObservable, observable } from "mobx";

export class LeftDrawModal {
  @observable
  public allCityDate: defs.traffic.UrbanAreasShowTheData[] = [];

  @observable
  // 选中城市的信息
  public allAreaByCityData: defs.traffic.UrbanAreasShowTheData[] = [];
  public cityData: defs.traffic.UrbanAreasShowTheData = {};

  public regionData: any[] = [];

  @observable
  public cityCenter: string = "";

  // 方案选择按钮数据
  public collectionsByArea: defs.traffic.AreaDataCollectionVO[] = [];

  public layers: Layer[] = [];

  constructor() {
    makeAutoObservable(this);
  }
}
