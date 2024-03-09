import React from 'react';
import ReactPlayer from 'react-player';
import { Guide } from './guide';
import screenfull from 'screenfull';
import './App.css';

function App() {
  const playerRef = React.useRef() as any;
  const [url, setUrl] = React.useState('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
  const [videoWidth, setVideoWidth] = React.useState('0%');
  const [videoDivDisplay, setVideoDivDisplay] = React.useState('none');

  const onSelectChannel = (channel: string) => {
    const vid = document.querySelector('#video');
    setUrl(channel);
    setVideoWidth('100%');
    setVideoDivDisplay('flex');
    screenfull.request(vid as any);
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        console.log('Element has exited fullscreen');

        setVideoWidth('0%');
        setVideoDivDisplay('none');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="App">
      <div id='video' style={{ display: videoDivDisplay, flex: 1, height: '50%!important', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <ReactPlayer
          controls={false}
          ref={playerRef}
          url={url}
          playing={true}
          loop={false}
          width={videoWidth}
          height="auto"
          config={{
            file: {
              hlsOptions: {
                debug: false,
              }
            }
          }}
        />
      </div>
      
      <Guide
        selectChannel={onSelectChannel}
      />
    </div>
  );
}

export default App;
