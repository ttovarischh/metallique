const channel = {
    volume: -30,
    mute: false,
    pan: 0
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '1m',
      velocity: 1
    },
    {
        time: '0:2:0',
        noteName: 'A2',
        duration: '2m',
        velocity: 0.2
      },
  ],
  duration: '2m'
}

const pingPongDelay = {
  wet: 0.5,
  delayTime: 0.25,
  maxDelayTime: 1
}


export { channel, sequence, pingPongDelay }