import { styles } from './styles';

export const Time = ({ time }: any) => {
  const getTimes = (time: string) => {
    let first = '';
    let second;
    let third

    // 3:00, 3:15, 3:30, 3:50

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
    }
  };

  const getNextTime = (first: string) => {
    const hr = first.split(':')[0];
    const min = first.split(':')[1];

    if (first.includes('30')) {
      return hr === '12'
        ? '1:00'
        : `${Number(hr) + 1}:00`;
    }

    return `${hr}:30`;
  };

  const times = getTimes(time);

  return (
    <div style={styles.time}>
      <div style={styles.timeLeft}>
        {time}
      </div>
      <div style={styles.timeRight}>
        <div style={styles.timeSection}>{times.first}</div>
        <div style={styles.timeSection}>{times.second}</div>
        <div style={styles.timeSection}>{times.third}</div>
      </div>
    </div>
  );
};
