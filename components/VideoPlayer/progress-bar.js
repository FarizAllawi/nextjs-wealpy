import {useCallback, useRef} from "react";

export default function ProgressBar(props) {

  const { progress, playerRef, onSeek, setProgress } = props

  const handleSeek = (event) => {
    onSeek(event)
  }

  const progressBarRef = useRef(null);

  const handleProgressBarMove = useCallback((event) => {
    const progressBarRect = progressBarRef.current.getBoundingClientRect();
    const progressBarMinX = progressBarRect.x;
    const progressBarMaxX = progressBarRect.x + progressBarRect.width;

    const clientX = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;

    if (clientX >= progressBarMinX && clientX <= progressBarMaxX) {
      const offsetX = clientX - progressBarMinX;
      const seekTime = offsetX / progressBarRect.width;

      let dataProgress = { ...progress };
      dataProgress.played = seekTime;

      playerRef.current.seekTo(seekTime);
      setProgress(dataProgress);
    }
  }, [playerRef, progress, setProgress]);

  const handleProgressBarUp = useCallback(() => {
    document.removeEventListener('mousemove', handleProgressBarMove);
    document.removeEventListener('mouseup', handleProgressBarUp);
    document.removeEventListener("touchmove", handleProgressBarMove);
    document.removeEventListener("touchend", handleProgressBarUp);
  }, [handleProgressBarMove]);

  const handleProgressBarDown = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    const progressBarRect = event.currentTarget.getBoundingClientRect();
    const clientX = event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    const offsetX = clientX - progressBarRect.x;
    const seekTime = offsetX / progressBarRect.width;

    let dataProgress = { ...progress };
    dataProgress.played = seekTime;

    playerRef.current.seekTo(seekTime);
    setProgress(dataProgress);

    document.addEventListener("mousemove", handleProgressBarMove);
    document.addEventListener("mouseup", handleProgressBarUp);
    document.addEventListener("touchmove", handleProgressBarMove);
    document.addEventListener("touchend", handleProgressBarUp);
  }, [handleProgressBarMove, handleProgressBarUp, playerRef, progress, setProgress]);

  return (
    <div ref={progressBarRef} className="relative h-1 lg:h-2 flex flex-grow bg-white bg-opacity-40 rounded-full cursor-pointer">
      <div style={{ width: `${progress?.loaded * 100}%` }} className="absolute h-1 lg:h-2 flex bg-white bg-opacity-60 rounded-full"></div>

      <div style={{ width: `${progress?.played * 100}%` }} className="relative left-2 -top-0.5 h-3 z-30">
        <div className="absolute  right-0 w-2 h-2 lg:h-3 lg:w-3 bg-white rounded-full" ></div>
      </div>

      <div style={{ width: `${progress?.played * 100}%` }} className="absolute h-1 lg:h-2 flex bg-green-500 rounded-full z-20"></div>

      <div className="absolute w-full flex  top-1/2 -translate-y-1/2 z-40"
           onClick={handleSeek}
           onMouseDown={(e) => e.stopPropagation()}>
        <div className="absolute w-full h-10 -top-5 flex bg-transparent"
             onMouseDown={handleProgressBarDown}
             onTouchStart={handleProgressBarDown}></div>
      </div>
    </div>
  )
}