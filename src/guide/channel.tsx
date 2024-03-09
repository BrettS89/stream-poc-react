import { styles } from './styles';
import { showsByChannel } from './channels';

export const Channel = ({ channel, activeChannelId, id, times }: any) => {
  const activeStyles = channel._id === activeChannelId
    ? { backgroundColor: '#fff' }
    : {};

  const getPercentageWidth = (seconds: number) => {
    const percentage = (seconds / 5400) * 100;

    if (percentage > 100) return undefined;

    return `calc(100%/${(100 / percentage)})`;
  };

  const renderShows = () => {
    let timeLeft= 5400;
    const arr = [];

    let shouldContinue = true;

    const shows: [] = showsByChannel[channel._id as string] ?? [];

    const endTimeInSeconds = (new Date(times.firstISO).getTime() / 1000) + 5400;
    const endTimeISO = new Date(endTimeInSeconds * 1000).toISOString();

    let startTime = new Date(times.firstISO).getTime();

    // eligible, end date after start, start date before end
    const showsInTimeFrame = shows.filter((show: any) => {
      return show.end > times.firstISO && show.start < endTimeISO;
    });

    if (!showsInTimeFrame.length) {
      arr.push(
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          Empty
        </div>
      );

      return arr;
    }
    
    while(shouldContinue) {

      const show = showsInTimeFrame.shift() as any;

      if (!show) {
        arr.push(
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', borderLeft: '1px solid lightgray' }}>
          </div>
        );
  
        shouldContinue = false;
      } else if (show.start < times.firstISO) {
        const timeInWindow = (new Date(show.end).getTime() - startTime) / 1000;

        timeLeft-= timeInWindow;
        startTime+= (timeInWindow * 1000);

        const width = getPercentageWidth(timeInWindow);

        if (timeInWindow < 60  * 7) {
          arr.push(
            <div style={{ width, borderLeft: '1px solid lightgray', height: '100%', display: 'flex', alignItems: 'center' }}>
              {/* {show.name} */}
            </div>
          );
        } else {
          arr.push(
            <div style={{ width, borderLeft: '1px solid lightgray', height: '100%', display: 'flex', alignItems: 'center' }}>
              {show.name}
            </div>
          );
        }

      } else if (show.start > times.firstISO) {
        const blankTimeInWindow = (new Date(show.start).getTime() - startTime) / 1000;

        if (blankTimeInWindow > 1) {
          timeLeft-= blankTimeInWindow;

          startTime+= (blankTimeInWindow * 1000);
  
          const width = getPercentageWidth(blankTimeInWindow);
  
          arr.push(
            <div style={{ width, borderLeft: '1px solid lightgray', height: '100%', display: 'flex', alignItems: 'center' }}>
            </div>
          );
        }

        const timeInWindow = (new Date(show.end).getTime() - new Date(show.start).getTime()) / 1000;

        timeLeft-= timeInWindow;

        startTime+= (timeInWindow * 1000);

        const showWidth = getPercentageWidth(timeInWindow);

        arr.push(
          <div style={{ width: showWidth, borderLeft: '1px solid lightgray', height: '100%', display: 'flex', alignItems: 'center' }}>
            {show.name}
          </div>
        );
      }

      if (timeLeft < 60) {
        shouldContinue = false;
      }
    }

    return arr;
  };

  return (
    <div style={{ ...styles.channel, ...activeStyles }} id={id}>
      <div style={styles.channelInfo}>
        {channel.name}
      </div>
      <div style={styles.shows}>
        {renderShows()}
      </div>
    </div>
  );
};
