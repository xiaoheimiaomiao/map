import { makeAutoObservable } from "mobx";

export class RegionDataSelectModal {
  public secondLayer: any[] = [];
  public subwayPoints: any[] = [];
  public subwayPointLayerChecked:boolean=false;
  constructor() {
    makeAutoObservable(this);
  }
}
