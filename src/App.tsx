import React from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import './App.css';

function App() {
  const playerRef = React.useRef() as any;
  const [isPlaying, setIsPlaying] = React.useState(false);

  // const onToggleFullscreen = () => {
  //   const vid = document.querySelector('video');
  //   screenfull.request(vid as any);
  // };

  return (
    <div className="App">
      <ReactPlayer
        controls={false}
        ref={playerRef}
        url='http://localhost:4000/index.m3u8'
        playing={true}
        loop={false}
        width="100%"
        height="auto"
        config={{
          file: {
            hlsOptions: {
              debug: true,
            }
          }
        }}
      />
    </div>
  );
}

export default App;
