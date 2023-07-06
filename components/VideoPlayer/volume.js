import { useCallback, useRef } from "react";
import {
  IcSpeakerWhite,
  IcSpeakerMutedWhite
} from "@/public/images";

export default function Volume(props) {
  const { volume, windowSize, setMuted,setVolume } = props;
  const volumeProgressRef = useRef(null);

  const handleVolume = useCallback((volume) => {
    let volumeValue = volume
    if (volume?.nativeEvent?.offsetX) {
      volumeValue = volume.nativeEvent.offsetX / volume.target.offsetWidth;
    }
    volumeValue = Math.max(0, Math.min(1, volumeValue)).toFixed(1);
    setVolume(parseFloat(volumeValue));
    setMuted(false);
  }, [setMuted, setVolume]);

  const handleMuted = () => {
    volume !== 0 ? setVolume(0) : setVolume(1)
  }

  const handleProgressBarMove = useCallback((event) => {
      const progressBarRect = volumeProgressRef.current.getBoundingClientRect();
      const progressBarMinX = progressBarRect.x;
      const progressBarMaxX = progressBarRect.x + progressBarRect.width;

      const clientX = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;

      if (clientX >= progressBarMinX && clientX <= progressBarMaxX) {
        const offsetX = clientX - progressBarMinX;
        const volume = offsetX/ progressBarRect.width;
        handleVolume(volume);
      }
    },
    [handleVolume]
  );

  const handleProgressBarUp = useCallback(() => {
    document.removeEventListener('mousemove', handleProgressBarMove);
    document.removeEventListener('mouseup', handleProgressBarUp);
    document.removeEventListener("touchmove", handleProgressBarMove);
    document.removeEventListener("touchend", handleProgressBarUp);
  }, [handleProgressBarMove]);

  const handleProgressBarDown = useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();

      const progressBarRect = event.currentTarget.getBoundingClientRect()
      const clientX = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
      const offsetX = clientX - progressBarRect.x;
      const volume = offsetX / progressBarRect.width;
      handleVolume(volume);

      document.addEventListener("mousemove", handleProgressBarMove);
      document.addEventListener("mouseup", handleProgressBarUp);
      document.addEventListener("touchmove", handleProgressBarMove);
      document.addEventListener("touchend", handleProgressBarUp);
    },
    [handleProgressBarMove, handleProgressBarUp, handleVolume]
  );

  return (
    <div style={{ width: "70%" }} className="flex flex-row items-center place-content-center mr-4 space-x-2">
      <div className="flex item-center place-content-center" onClick={handleMuted}>
        {
          volume === 0 ? (
            <IcSpeakerMutedWhite width={windowSize.width >= 1024 ? 18 : 12}
                                 height={windowSize.width >= 1024 ? 18 : 12}
                                 className="cursor-pointer"/>
          ) : (
            <IcSpeakerWhite
              width={windowSize.width >= 1024 ? 18 : 12}
              height={windowSize.width >= 1024 ? 18 : 12}
              className="cursor-pointer"
            />
          )
        }

      </div>
      <div ref={volumeProgressRef} className="relative h-1 lg:h-2 flex flex-grow bg-white rounded-full cursor-pointer">
        <div style={{ width: `${volume * 100}%` }} className="absolute h-1 lg:h-2 flex bg-green-500 rounded-full z-20"></div>

        <div style={{ width: `${volume * 100}%` }} className="relative left-2 -top-0.5 h-3 z-30">
          <div className="absolute  right-0 h-2 w-2 lg:h-3 lg:w-3 bg-white rounded-full" ></div>
        </div>

        <div className="absolute w-full flex top-1/2 -translate-y-1/2 z-40"
             onClick={handleVolume}
             onMouseDown={(e) => e.stopPropagation()}>
          <div className="absolute w-full h-10 -top-5 flex bg-transparent"
               onMouseDown={handleProgressBarDown}
               onTouchStart={handleProgressBarDown}></div>
        </div>
      </div>
    </div>
  );
}