const channel = {
  volume: 0,
  mute: false,
};

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
      noteName: 'C1',
      duration: '1n',
      velocity: 0.6
    },
    {
      time: '0:2:0',
      noteName: 'A3',
      duration: '8t',
      velocity: 0.6
    },
    {
      time: '0:3:0',
      noteName: 'A4',
      duration: '8t',
      velocity: 0.5
    },
    {
      time: '0:4:0',
      noteName: 'A2',
      duration: '4m',
      velocity: 0.8
    },
    {
      time: '0:5:0',
      noteName: 'A1',
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
  duration: '2m',
  loop: true,
};

const pingPongDelay = { wet: 0.4, delayTime: 0.25, maxDelayTime: 1 }

const vibrato = {
  wet: 0.7,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.5,
  type: 'sine'
}


export { channel, sequence, pingPongDelay, vibrato };
