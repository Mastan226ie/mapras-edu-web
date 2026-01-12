import React from "react";
import "./VideoPlyr.css";

const VideoPlyr = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={collegevideo} autoPlay muted controls></video>
    </div>
  );
};
export default VideoPlyr;
