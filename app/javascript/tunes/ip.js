const channel = {
    volume: -10,
    mute: false,
    pan: 0
}

const sequence = {
  steps: [
    {
      time: '2:0:0',
      noteName: 'A1',
      duration: '2m',
      velocity: 1
    }
  ],
  duration: '10m'
}

const chorus = {
  wet: 1,
  type: 'sine',
  frequency: 10,
  delayTime: 100,
  depth: 1,
  spread: 180
}

const pingPongDelay = {
  wet: 0.5,
  delayTime: 0.25,
  maxDelayTime: 1
}


export { channel, sequence, chorus, pingPongDelay }