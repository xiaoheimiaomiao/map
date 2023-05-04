import { AppContext } from "@/Modal";
import { Scene } from "@antv/l7";
import type { LarkMapProps } from "@antv/larkmap";
import { LarkMap } from "@antv/larkmap";
import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
type Props = {
  mapStyle?: "light" | "normal" | "dark";
  mapCenter?: [number, number];
};
export const MapContainer: FC<Props> = observer(({ mapStyle }) => {
  // console.log("mapStyle: ", mapStyle);
  const app = useContext(AppContext);
  const config: LarkMapProps = {
    mapType: "Gaode",
    mapOptions: {
      style: mapStyle || "dark",
      center: app.map.center,
      zoom: 9,
    },
  };

  const [center, setCenter] = useState();
  // console.log("center: ", center);
  const onSceneLoaded = (scene: Scene) => {
    // console.log("scene: ", scene);
    // let bounds = app.leftModal.allAreaByCityData[0].boundary;
    // console.log("bounds: ", bounds);
    // scene.map.getFitZoomAndCenterByBounds(bounds);
    scene.map?.setCity(app.leftModal.cityCenter);
    console.log("app.leftModal.cityCenter: ", app.leftModal.cityCenter);
  };

  // useEffect(() => {

  //   scene.map.setCity(app.leftModal.cityCenter);
  // }, [app.leftModal.cityCenter])

  return (
    <>
      <LarkMap
        // onMapMove={(center) => {}}
        {...config}
        style={{ height: "calc(100vh - 72px)" }}
        onSceneLoaded={onSceneLoaded}
      >
        {/* <h2 style={{ position: "absolute", left: "10px" }}>LarkMap</h2> */}
      </LarkMap>
    </>
  );
});
