var users = [
  {
    id: 1,
    email: 'CliffBurton@example.com',
    username: 'CliffBurton',
    hashedPassword: 'TOP_SECRET'
  },
  {
    id: 2,
    email: 'ShuggieOtis@example.com',
    username: 'Shuggie',
    hashedPassword: 'TOP_SECRET'
  },
  {
    id: 3,
    email: 'TonyWilliams@example.com',
    username: 'TonyWilliams',
    hashedPassword: 'TOP_SECRET'
  }
];

var overlayTracks = [
  {
    id: 1,
    url: 'overlayTrack1'
  },
  {
    id: 2,
    url: 'overlayTrack2'
  },
  {
    id: 3,
    url: 'overlayTrack3'
  }
];

var instruments = [
  {
    id: 1,
    name: 'Bass'
  },
  {
    id: 2,
    name: 'Guitar'
  },
  {
    id: 3,
    name: 'Drums'
  }
];

var singleTracks = [
  {
    url: 'singleTrack1',
    userId: 1,
    overlayTrackId: 1,
    instrumentId: 1
  },
  {
    url: 'singleTrack2',
    userId: 2,
    overlayTrackId: 2,
    instrumentId: 2
  },
  {
    url: 'singleTrack3',
    userId: 3,
    overlayTrackId: 3,
    instrumentId: 3
  }
];

module.exports = {
  users: users,
  overlayTracks: overlayTracks,
  instruments: instruments,
  singleTracks: singleTracks
};
