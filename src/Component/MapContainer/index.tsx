import { AppContext } from "@/Modal";
import { Scene } from "@antv/l7";
import { LarkMap, LarkMapProps } from "@antv/larkmap";
import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { LayerComponents } from "./LayerComponents";
import { PositionPolygonLayer } from "./polygonLayer";

type Props = {
  mapStyle?: "light" | "normal" | "dark";
  mapCenter?: [number, number];
};
const images = [
  {
    id: "01",
    image:
      "https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg",
  },
  {
    id: "02",
    image:
      "https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg",
  },
  {
    id: "03",
    image:
      "https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg",
  },
];

export const MapContainer: FC<Props> = observer(({ mapStyle }) => {
  const app = useContext(AppContext);

  const [loadedImages, setLoadedImages] = useState(false);
  console.log("loadedImages: ", loadedImages);

  const config: LarkMapProps = {
    mapType: "Gaode",
    mapOptions: {
      style: mapStyle || "dark",
      center: app.map.center,
      zoom: 9,
    },
  };

  const onSceneLoaded = (scene: Scene) => {
    Promise.all(images.map(({ id, image }) => scene?.addImage(id, image))).then(
      () => {
        setLoadedImages(true);
      }
    );
  };

  return (
    <>
      <LarkMap
        {...config}
        style={{ height: "calc(100vh - 72px)" }}
        onSceneLoaded={onSceneLoaded}
      >
        {/* {loadedImages && <SubwayPointLayer />} */}
        {loadedImages && (
          <LayerComponents layers={app.leftModal.layers}></LayerComponents>
        )}
        <PositionPolygonLayer />
      </LarkMap>
    </>
  );
});
