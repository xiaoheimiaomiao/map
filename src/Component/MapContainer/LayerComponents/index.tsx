import { PointLayer, PointLayerProps, PolygonLayer, PolygonLayerProps } from '@antv/larkmap';
import React, { useState } from 'react'
import {FeatureCollection} from 'geojson'

enum LayerType{
  point="point",
  polygon="polygon"
}


type Layer={
  type:LayerType,
  data:FeatureCollection;
}





const NewPointLayer=({data}:{data:FeatureCollection})=>{
  const pointLayerOptions: Omit<PointLayerProps, 'source'> = {
    autoFit: true,
    shape: 'circle',
    size:8 ,
    color: {
      field: 'temperature',
      value: ['#0f9960', '#33a02c', '#377eb8'],
    },
    state: {
      active: true,
    },
    style: {
      opacity: 0.8,
    },
  };
  const [pointSource, setPointSource] = useState({
    data: {},
    parser: {type: 'geojson'},
   });
  return  <PointLayer {...pointLayerOptions} source={pointSource} />
}

const NewPolygonLayer=({data}:{data:FeatureCollection})=>{
  const polygonLayerOptions: Omit<PolygonLayerProps, 'source'> = {
    autoFit: true,
    shape: 'fill',
    color: {
      field: 'adcode',
      value: ['#0f9960', '#33a02c', '#477eb8'],
    },
    state: {
      active: true,
    },
    style: {
      opacity: 0.6,
    },
  };
  const [polygonSource, setPolygonSource] = useState({
    data: {},
    parser: { type: 'geojson' },
  });  
  return <PolygonLayer {...polygonLayerOptions} source={polygonSource}></PolygonLayer>
}

export const LayerComponents=({layers}:{layers: Layer[]}) =>{
  
  const createLayerComponents=(layerType:LayerType)=>{
    switch (layerType) {
      case LayerType.point :
        return NewPointLayer
      case LayerType.polygon:
      return NewPolygonLayer
    }
  }
  return (
   <>
   {
    layers.map(layer => {
      const Com = createLayerComponents(layer.type)

      return <Com data={layer.data}></Com>
    })
   }
   
   </> 
  )
}
 