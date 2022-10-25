const channel = {
    volume: 0,
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
        noteName: 'A1',
        duration: '2m',
        velocity: 0.2
      },
  ],
  duration: '8m'
}

const feedbackDelay = {
  wet: 0.8,
  delayTime: 0.8,
  maxDelay: 1
}

const vibrato = {
  wet: 0,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.5,
  type: 'sine'
}

const reverb = {
  wet: 0,
  decay: 2,
  preDelay: 0.03
}


export { channel, sequence, feedbackDelay, vibrato, reverb }