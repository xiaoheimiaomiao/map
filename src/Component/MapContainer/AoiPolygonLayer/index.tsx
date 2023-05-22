import { AppContext } from "@/Modal";
import { PolygonLayerProps,PolygonLayer } from "@antv/larkmap";
import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";

const layerOptions: Omit<PolygonLayerProps, 'source'> = {
    autoFit: true,
    shape: 'fill',
    // color: {
    //   field: 'adcode',
    //   value: ['#0f9960', '#33a02c', '#477eb8'],
    // },
    state: {
      active: true,
    },
    style: {
      opacity: 0.6,
    },
  };

  type Props = {
   data:[
    coordinates: string,
    detail:string,
    logo:any,
    unitName:string,
    weight:any
   ]
  };
export const AoiPolygonLayer=observer((props:Props)=>{
    const app = useContext(AppContext);

    const [options, setOptions] = useState(layerOptions);

    const [source, setSource] = useState({
      data: {},
      parser: { type: 'geojson' },
    });
   console.log('source: ', source);

    useEffect(()=>{
        const data={
            type: 'FeatureCollection', features:[
               props.data.map((item)=>{
                  return {type:'Feature',
                  geometry:JSON.parse(item.coordinates)}
               })  
            ] 
        }
        setSource((prevState) => ({ ...prevState, data }))
    },[])
    return(
        <>
        <PolygonLayer {...options} source={source} />
        </>
    )
})