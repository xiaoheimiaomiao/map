import { Api } from "@/api";
import LandMultipleSelect from "@/Component/LandMultipleSelect";
import { MapContainer } from "@/Component/MapContainer";
import { AppContext, AppModal } from "@/Modal";
import { useState } from "react";
import { useRequest } from "umi";
import LeftDrawer from "./LeftDrawer";
import MapStyle from "./MapStyle";

const app = new AppModal();

export default function Map() {
  const [model, setModel] = useState<"light" | "normal" | "dark">("dark");

  //  获取所有城市数据
  const { data: allCityData } = useRequest(Api.traffic.demo.getGetAllCity);

  return (
    <div
      style={{
        // background: "#101721",
        height: "calc(100vh - 72px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <AppContext.Provider value={app}>
        {/*左侧菜单模块 */}
        <div className="">
          <LeftDrawer allCity={allCityData}></LeftDrawer>
        </div>

        {/* 地图切换模块 明、中、暗模式 */}
        <MapStyle model={model} setModel={setModel}></MapStyle>

        <div>
          {/* 主地图 */}
          <MapContainer mapStyle={model} />
        </div>

        {/* 右侧菜单模块 */}

        <LandMultipleSelect></LandMultipleSelect>
      </AppContext.Provider>
    </div>
  );
}
