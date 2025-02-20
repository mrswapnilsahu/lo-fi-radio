import React, { useEffect, useState } from 'react';

import YouTube from 'react-youtube';

function Player({ station, volume }) {

  const [opts, setOpts] = useState();

  // Initializing player whenever this component mounts 
  useEffect(() => {
    setOpts({
      vq: 'tiny',
      width: 10,
      height: 10,
      playerVars: {
        allow: 'autoplay',
        autoplay: 1,
        'origin': 'http://localhost:3000'
      }
    });
  }, []);

  const _onReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(volume);
  }

  return (
      <div>
        {station && station.key && <YouTube videoId={station.key} opts={opts} onReady={_onReady} allow="autoplay" style={{ display: 'none'}} />}
      </div>
  )
}

export default Player
