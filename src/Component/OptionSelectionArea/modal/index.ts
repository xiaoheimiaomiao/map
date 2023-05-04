import { makeAutoObservable } from "mobx";

export class OptionSelectModal {
  public cityData: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
}
