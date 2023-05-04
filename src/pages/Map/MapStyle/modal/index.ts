import { makeAutoObservable } from "mobx";

export class MapStyleModal {
  public mapStyle: string = "dark";
  constructor() {
    makeAutoObservable(this);
  }
}
