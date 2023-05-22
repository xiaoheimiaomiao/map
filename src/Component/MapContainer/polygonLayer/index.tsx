import { AppContext } from '@/Modal';
import {  PolygonLayer, PolygonLayerProps } from '@antv/larkmap'
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react'

const layerOptions: Omit<PolygonLayerProps, 'source'> = {
    autoFit: true,
    shape: 'fill',
    // visible:false,
    state: {
      active: false, 
    },
    style: {
      opacity: 0.5,
    },
  };

export const PositionPolygonLayer=observer( ()=> {
    const app = useContext(AppContext);

    const [options, setOptions] = useState(layerOptions);

    const [source, setSource] = useState({
      
      data: {},
      parser: { type: 'geojson' },
    });
console.log('source: ', source);
       
    useEffect(()=>{
        if(app.leftModal.cityData.boundary){
            const data={
                type: 'FeatureCollection',
                features: [
                    {type:'Feature',
                    geometry:JSON.parse( app.leftModal.cityData.boundary)
                }]
            }
            setSource((preSource)=>({...preSource,data}))
        }
    },[ app.leftModal.cityData])

  return (
    <>
           <PolygonLayer {...options}  source={source} />
    </>
  )
})
