const channel = {
    volume: -30,
    mute: false
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A2',
      duration: '1m',
      velocity: 0.8
    },
    {
      time: '0:1:0',
      noteName: 'A1',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '0:2:0',
      noteName: 'A2',
      duration: '8t',
      velocity: 0.6
    },
    {
      time: '0:3:0',
      noteName: 'A3',
      duration: '8t',
      velocity: 0.5
    },
    {
      time: '0:4:0',
      noteName: 'A1',
      duration: '4m',
      velocity: 0.8
    },
    {
      time: '0:5:0',
      noteName: 'A3',
      duration: '1m',
      velocity: 0.5
    },
    {
      time: '0:6:0',
      noteName: 'A2',
      duration: '1m',
      velocity: 0.8
    },
  ],
  duration: '2m'
}

const pingPongDelay = {
  wet: 0.7,
  delayTime: 0.25,
  maxDelayTime: 1
}

export { channel, sequence, pingPongDelay }