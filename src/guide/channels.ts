export const channels = [
  {
    _id: '1',
    name: 'News',
  },
  {
    _id: '2',
    name: 'Sports',
  },
  {
    _id: '3',
    name: 'Gaming',
  },
  {
    _id: '4',
    name: 'Tech',
  },
  {
    _id: '5',
    name: 'Fitness',
  },
  {
    _id: '6',
    name: 'Shopping',
  },
  {
    _id: '7',
    name: 'Lifestyle',
  },
  {
    _id: '8',
    name: 'test8',
  },
  {
    _id: '9',
    name: 'test9',
  },
  {
    _id: '10',
    name: 'test10',
  }
];

const channel1Shows = [
  { _id: '1', name: 'PBD Podcast', start: '2024-03-09T13:42:36.386Z', end: '2024-03-09T15:00:36.386Z', duration: 700 },
  { _id: '2', name: 'Charlie Kirk', start: '2024-03-09T15:00:36.386Z', end: '2024-03-09T15:20:36.386Z', duration: 700 },
  { _id: '3', name: 'The Matt Walsh Show', start: '2024-03-09T15:20:36.386Z', end: '2024-03-09T19:20:36.386Z', duration: 700 },


  // { _id: '3', name: 'The Matt Wash Show', start: '2024-02-09T20:54:05.030Z', end: '2024-02-09T20:54:05.030Z', duration: 700 },
  // { _id: '4', name: 'Louder with Crowder', start: '2024-02-09T21:05:46.030Z', duration: 700 },
];

export const showsByChannel = {
  '1': [...channel1Shows],
  '2': [],
  '3': [],
  '4': [],
  '5': [],
  '6': [...channel1Shows],
  '7': [],
  '8': [],
  '9': [],
  '10': [],
} as any;

