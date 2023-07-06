'use client'
import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import Image from "next/image";

import {ImageThumbnailVideo} from "@/public/images";

export default function BackgroundHeader(){

  const { globalReducer } = useSelector(state => state)

  return (
    <>
      {
        globalReducer.windowSize.width >= 1024 && (
          <>
            <div className="absolute top-0 left-0 w-screen -z-10">
              <Image src={ImageThumbnailVideo}
                     layout="responsive" objectFit='cover'
                     className="w-screen absolute background-blur bg-opacity-40"
                     alt="thumbnail-course"  />
              <div className="w-screen background-radial bg-opacity-90"></div>
              <div style={{top:"50vh" , height:"1000vh"}} className="absolute w-screen bg-black"></div>
            </div>
            <div className="circle-green -z-10"></div>
            <div className="circle-red -z-10"></div>
          </>
        )
      }
    </>

  )
}