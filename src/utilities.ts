export const setISOString = (isoString: string, half?: boolean) => {
  // console.log(isoString);
  const minAndSec = half ? '30:00' : '00:00';

  const split = isoString.split('T');
  const date = split[0];
  const t = split[1];

  const times = t.split(':');

  const hr = times[0];

  const z = times[2].split('.')[1];

  const build = `${date}T${hr}:${minAndSec}.${z}`;

  return build;
};
