import { AppContext } from "@/Modal";
import { Scene } from "@antv/l7";
import { LarkMapProps, PointLayer, PointLayerProps } from "@antv/larkmap";
import { LarkMap } from "@antv/larkmap";
import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { SubwayPointLayer } from "./subwayPointLayer";
import { PositionPolygonLayer } from "./polygonLayer";

type Props = {
  mapStyle?: "light" | "normal" | "dark";
  mapCenter?: [number, number];
};
const images = [
  { id: '01', image: 'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg' },
  { id: '02', image: 'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg' },
  { id: '03', image: 'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg' },
];

// const layerOptions: Omit<PointLayerProps, 'source'> = {
//   autoFit: true,
//   shape: '01',
//   // size: {
//   //   field: 'temperature',
//   //   value: ({ temperature }) => temperature,
//   // },
//   // color: {
//   //   field: 'temperature',
//   //   value: ['#0f9960', '#33a02c', '#377eb8'],
//   // },
//   state: {
//     active: true,
//   },
//   style: {
//     opacity: 0.8,
//   },
// };

export const MapContainer: FC<Props> = observer(({ mapStyle }) => {
  // console.log("mapStyle: ", mapStyle);
  const app = useContext(AppContext);

  // const [options, setOptions] = useState(layerOptions);

  const [loadedImages, setLoadedImages] = useState(false);
  console.log('loadedImages: ', loadedImages);

  // const [source, setSource] = useState({
  
  //   data: {},
  //   parser: {type: 'geojson'},
  // });
 
  
  // useEffect(() => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/Lx96%24Pnwhw/city-weather.json')
  //     .then((response) => response.json())
  //     .then((data: any) => {
  //       setSource((prevState) => ({ ...prevState, data }));
  //     });
  // }, []);
  
  // useEffect(()=>{
  //   const features= app.RegionDataSelectModal.subwayPoints.map((item)=>{
  //     return {
  //       type: "Feature",
  //       geometry:JSON.parse( item.coordinates),
  //       properties: JSON.parse(item.detail)
  //     }

  //   }) 
  //   const data={
      
  //     type: "FeatureCollection",
  //     features
  //   }
  //   setSource((preSource)=>({...preSource,data})

  //   )
  //   // setSource()
  // },[app.RegionDataSelectModal.subwayPoints])

  const config: LarkMapProps = {
    mapType: "Gaode",
    mapOptions: {
      style: mapStyle || "dark",
      center: app.map.center,
      zoom: 9,
    },
  };

  // const [center, setCenter] = useState();
  // console.log("center: ", center);
  const onSceneLoaded = (scene: Scene) => {
    // console.log("scene: ", scene);
    // let bounds = app.leftModal.allAreaByCityData[0].boundary;
    // console.log("bounds: ", bounds);
    // scene.map.getFitZoomAndCenterByBounds(bounds);
    // scene.map?.setCity("北京市");
    // console.log("app.leftModal.cityCenter: ", app.leftModal.cityCenter);

    Promise.all(images.map(({ id, image }) => scene?.addImage(id, image))).then(() => {
      setLoadedImages(true);
    });
    // console.log(scene);
  };

  // useEffect(() => {
   
  //     scene.map.setCity(app.leftModal.cityCenter);
    
    
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

       
        {loadedImages  && < SubwayPointLayer/>}
      
        <PositionPolygonLayer/>
      </LarkMap>
    </>
  );
});
