import { makeAutoObservable } from "mobx";

export class RegionDataSelectModal {
  public secondLayer: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
}
