'use client'
import { useCallback, useEffect} from 'react'
import propTypes from "prop-types";
import { useState, useRef } from "react";
import ReactPlayer from 'react-player/lazy';

import ProgressBar from "./progress-bar";
import VolumePlayer from "./volume";
import SettingPlayer from "./setting";

import Image from "next/image";
import {
  IcFullScreenWhite,
  IcPlayWhite,
  IcPauseWhite,
  ImageThumbnailVideo
} from "@/public/images";

const ThumbnailVideo = () => {
  return (
    <Image src={ImageThumbnailVideo}
           layout="responsive" objectFit='cover'
           className="max-h-80 rounded-3xl"
           alt="thumbnail-video" />
  )
}

export default function VideoPlayer(props) {

  const { source } = props
  // const { globalReducer } = useSelector(state => state)

  const playerRef = useRef(null);
  const playerWrapper = useRef(null);
  const controlWrapper = useRef(null);
  const controlTimeoutRef = useRef(null);


  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControl, setIsControl] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState({})

  const [windowSize, setWindowSize] = useState({})
  const [mounted, setIsMounted] = useState(false);

  const handleReady = data => {
    // const availableQualities = playerRef.current
    // // setQualityOptions(availableQualities);
    // // setSelectedQuality(playerRef.current.getPlaybackQuality());
    // console.log(availableQualities)
  }

  const handleProgress = data => {

    const remainingSeconds = (1 - data.played) * duration;
    const remainingHours = Math.floor(remainingSeconds / 3600);
    const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const remaining = Math.floor(remainingSeconds  % 60);

    data.remaining = {
      hours: remainingHours,
      minutes: remainingMinutes % 60,
      seconds: remaining,
    }
    setProgress(data);
  }

  const handleSeek = (event) => {
    const seekTime = event.nativeEvent.offsetX / event.target.offsetWidth;
    let dataProgress = progress;
    dataProgress.played = seekTime;

    playerRef.current.seekTo(seekTime);
    setProgress(dataProgress);
  }

  const fullscreen = () => {

    if (!document.fullscreenElement) {
      if (playerWrapper.current.requestFullscreen) {
        playerWrapper.current.requestFullscreen();
      } else if (playerWrapper.current.mozRequestFullScreen) { // Firefox
        playerWrapper.current.mozRequestFullScreen();
      } else if (playerWrapper.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
        playerWrapper.current.webkitRequestFullscreen();
      } else if (playerWrapper.current.msRequestFullscreen) { // IE/Edge
        playerWrapper.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen)
  };

  const handleMouseMove = useCallback(() => {
    setIsControl(true);

    if (controlTimeoutRef.current) {
      clearTimeout(controlTimeoutRef.current);
    }

    controlTimeoutRef.current = setTimeout(() => {
      setIsControl(false);
    }, 3000); // Set the timeout duration in milliseconds
  }, []);

  const handleKeyPress = useCallback((event) => {
    event.preventDefault()
    if (event.code === 'Space') {
      setIsPlaying(!isPlaying);
    }

  }, [isPlaying])


  useEffect(() => {

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener('keydown', handleKeyPress);

    if (!mounted) {
      setIsMounted(true)
      handleResize()
    }

    if (isFullscreen) {
      controlWrapper.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      clearTimeout(controlTimeoutRef.current);
      // controlWrapper.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    setWindowSize,
    handleMouseMove,
    isFullscreen,
    handleKeyPress,
    mounted]);

  return mounted && (
      <div ref={playerWrapper}
           className={`relative w-full lg:w-10/12 h-48 xl:h-52 2xl:h-80 rounded-3xl 
                       ${isFullscreen ? 'ease-in' : 'ease-out'} duration-300`}>

        <ReactPlayer ref={playerRef}
                     url={source}
                     playing={isPlaying}
                     muted={muted}
                     volume={volume}
                     controls={false}
                     className="absolute w-full h-full rounded-3xl"
                     light={<ThumbnailVideo thumbnail/>}
                     width="100%" height="100%"
                     playIcon={
                       <div className="absolute cursor-pointer w-12 h-12 flex items-center place-content-center rounded-full bg-green-500 pl-1" onClick={() => setIsPlaying(true)}>
                         <IcPlayWhite width={16} height={16}/>
                       </div>
                     }
                     config={{
                       youtube: {
                         playerVars: { showinfo: 1 }
                       },
                     }}
                     onReady={handleReady}
                     onPlay={() => setIsPlaying(true)}
                     onPause={() => setIsPlaying(false)}
                     onProgress={data => handleProgress(data)}
                     onDuration={data => setDuration(data)}/>

        <div ref={controlWrapper} className={`${ (!isPlaying && progress?.playedSeconds === undefined) ? 'invisible ease-out' : 'visible ease-in'} 
                         absolute w-full h-full flex items-end duration-300`}>
          <div className={`w-full px-4  2xl:px-8 py-4 lg:py-6 flex flex-row space-x-2 items-center justify-between`}>
            {
              (isControl || !isFullscreen) && (
                <>
                  <div style={ windowSize.width >= 480 ?  { width: "80%" } : {width: "60%"}}
                       className="flex flex-row items-center place-content-center space-x-2">
                    {/* Button Play and Pause */}
                    <div className={`cursor-pointer px-1 py-1.5 lg:px-2 lg:py-2.5 
                           ${isPlaying? 'hover:bg-green-500 hover:duration-300' : 'bg-green-500'}  
                           rounded-full`}
                         onClick={() => setIsPlaying(!isPlaying)}>
                      {
                        isPlaying ? (
                          <IcPlayWhite width={windowSize.width > 1024 ? 14 : 8}
                                       height={windowSize.width > 1024 ? 14 : 8}
                                       className="ml-0.5"/>
                        ) : (
                          <IcPauseWhite width={windowSize.width > 1024 ? 16 : 10}
                                        height={windowSize.width > 1024 ? 14 : 8}
                                        className=""/>
                        )
                      }
                    </div>

                    {/* Progress */}
                    <ProgressBar progress={progress}
                                 playerRef={playerRef}
                                 onSeek={handleSeek}
                                 setProgress={data => setProgress(data)} />


                    {/* Times */}
                    <div className="w-14 flex items-center place-content-center text-xs 2xl:text-sm text-white font-medium">
                      - { (progress?.remaining?.hours  !== 0 && progress?.remaining?.hours !== undefined) && `${progress?.remaining?.hours} : `}
                      { progress?.remaining?.minutes } : { progress?.remaining?.seconds }
                    </div>
                  </div>


                  <div style={windowSize.width >= 480 ?  { width: "20%" } : {width: "40%"}}
                       className="flex flex-row items-center place-content-between">

                    <VolumePlayer volume={volume}
                            muted={muted}
                            windowSize={windowSize}
                            setMuted={data => setMuted(data)}
                            setVolume={data => setVolume(data)}/>



                    <SettingPlayer windowSize={windowSize} />



                    <div style={{ width: "15%" }} className="flex item-center place-content-end">
                      <IcFullScreenWhite width={windowSize.width >= 1024 ? 18 : 12}
                                         height={windowSize.width >= 1024 ? 18 : 12}
                                         className="cursor-pointer"
                                         onClick={fullscreen}/>
                    </div>
                  </div>

                </>
              )
            }
          </div>

        </div>
  </div>
  )
}

VideoPlayer.propTypes = {
  source: propTypes.string,

}