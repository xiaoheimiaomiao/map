import { OptionSelectModal } from "@/Component/OptionSelectionArea/modal";
import { RegionDataSelectModal } from "@/Component/RegionDataSelect/modal";
import { LeftDrawModal } from "@/pages/Map/LeftDrawer/modal";
import { MapStyleModal } from "@/pages/Map/MapStyle/modal";
import { MapModal } from "@/pages/Map/modal";
import { makeAutoObservable } from "mobx";
// import { makeObservable, observable } from "mobx";
import { createContext } from "react";

export class AppModal {
  leftModal: LeftDrawModal;
  map: MapModal;
  RegionDataSelectModal: RegionDataSelectModal;

  OptionSelectModal: OptionSelectModal;
  mapStyleModal: MapStyleModal;
  constructor() {
    makeAutoObservable(this);
    this.leftModal = new LeftDrawModal();
    this.map = new MapModal();
    this.RegionDataSelectModal = new RegionDataSelectModal();
    this.OptionSelectModal = new OptionSelectModal();
    this.mapStyleModal = new MapStyleModal();
  }
}

export const AppContext = createContext<AppModal>(new AppModal());
