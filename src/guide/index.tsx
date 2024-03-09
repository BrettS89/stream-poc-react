import React from 'react';
import TV from '@mui/icons-material/LiveTv';
import { Channel } from './channel';
import { Time } from './time';
import { styles } from './styles';
import { channels } from './channels';
import { setISOString } from '../utilities';

interface Props extends React.PropsWithChildren {
  selectChannel: Function;
}

export const Guide: React.FC<Props> = ({ selectChannel }) => {
  const [handleUp, setHandleUp] = React.useState(0);
  const [handleDown, setHandleDown] = React.useState(0);
  const [activeChannel, setActiveChannel] = React.useState(channels[0]);
  const [time, setTime] = React.useState('');
  const [isoTime, setISOTime ] = React.useState(new Date().toISOString());

  React.useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'ArrowDown') {
        setHandleDown(Date.now())
      } else if (event.key === 'ArrowUp') {
        setHandleUp(Date.now());
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  React.useEffect(() => {
    if (handleDown !== 0) {
      const idx = channels.findIndex(ch => ch._id === activeChannel._id);

      if (channels[idx + 1]) {
        setActiveChannel(channels[idx + 1]);

        const element = document.getElementById(channels[idx + 1]._id);

        if (element) {
          console.log(element);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [handleDown]);

  React.useEffect(() => {
    if (handleUp !== 0) {
      const idx = channels.findIndex(ch => ch._id === activeChannel._id);

      if (channels[idx - 1]) {
        setActiveChannel(channels[idx - 1]);

        const element = document.getElementById(channels[idx - 1]._id);

        if (element) {
          console.log(element);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [handleUp]);

  React.useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      } as any;
      const timeString = date.toLocaleString('en-US', options);
      setTime(timeString);
      setISOTime(date.toISOString());
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const getTimes = (time: string, iso: string) => {
    let first = '';
    let second;
    let third

    const hr = time.split(':')[0];
    const min = time.split(':')[1];

    const num = hr + min;

    if (num >= hr + '30') {
      first = `${hr}:30`;
    } else {
      first = `${hr}:00`;
    }

    second = getNextTime(first);
    third = getNextTime(second);

    return {
      first,
      second,
      third,
      firstISO: setISOString(isoTime, first.includes('30')),
    };
  };

  const getNextTime = (first: string) => {
    const hr = first.split(':')[0];

    if (first.includes('30')) {
      return hr === '12'
        ? '1:00'
        : `${Number(hr) + 1}:00`;
    }

    return `${hr}:30`;
  };

  const times = getTimes(time, isoTime);

  const rednerChannels = (channelId: string) => {
    return channels.map(channel => {
      return (
        <Channel
          key={channel._id}
          channel={channel}
          activeChannelId={channelId}
          id={channel._id}
          times={times}
        />
      );
    });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TV style={{ fontSize: 28, color:'crimson', paddingBottom: 5 }} />
          <div style={styles.logoText}>
            <span style={{ color: 'crimson', marginRight: 4 }}>NEXT</span>UP
          </div>
        </div>
      </header>
      <Time time={time} />
      <section style={styles.main}>
        {rednerChannels(activeChannel._id)}
      </section>

    </div>
  );
};
