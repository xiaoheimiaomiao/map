import { AppContext } from '@/Modal';
import {  PolygonLayer, PolygonLayerProps } from '@antv/larkmap'
import { observe } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react'

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
                }
                ]
            }
             console.log('data: ', data);
            setSource((preSource)=>({...preSource,data}))
        }
    },[ app.leftModal.cityData])

  return (
    <>
           <PolygonLayer {...options}  source={source} />
    </>
  )
})
