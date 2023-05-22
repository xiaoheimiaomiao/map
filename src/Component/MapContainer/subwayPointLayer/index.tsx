import { AppContext } from "@/Modal";
import { PointLayer, PointLayerProps } from "@antv/larkmap";
import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";


const layerOptions: Omit<PointLayerProps, 'source'> = {
    autoFit: true,
    shape: '01',
    size:8,
    state: {
      active: false ,
    },
    style: {
      opacity: 0.8,
    },
  };

export const SubwayPointLayer=observer(()=>{
    const app = useContext(AppContext);

    const [options, setOptions] = useState(layerOptions);

    const [loadedImages, setLoadedImages] = useState(false);
    console.log('loadedImages: ', loadedImages);

    const [source, setSource] = useState({
      
        data: {},
        parser: {type: 'geojson'},
      });
console.log('source: ', source);
      useEffect(()=>{
        const features= app.RegionDataSelectModal.subwayPoints.map((item)=>{
          return {
            type: "Feature",
            geometry:JSON.parse( item.coordinates),
            properties: JSON.parse(item.detail)
          }
        }) 
        const data={
          type: "FeatureCollection",
          features
        }
        setSource((preSource)=>({...preSource,data})
        )
      },[app.RegionDataSelectModal.subwayPoints])

      

      return(
      <>
           <PointLayer {...options}  source={source} />
      </>
      )
})