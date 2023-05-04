import { makeAutoObservable, observable } from "mobx";

export class MapModal {
  @observable
  public center: [number, number] | undefined = [120.1, 30.26];
  constructor() {
    makeAutoObservable(this);
  }
}
