const channel = {
    volume: -10,
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
    }
  ],
  duration: '4m'
}

const pingPongDelay = {
  wet: 0.5,
  delayTime: 0.25,
  maxDelayTime: 1
}


export { channel, sequence, pingPongDelay }