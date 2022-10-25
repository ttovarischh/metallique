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
    },
    {
        time: '4:0:0',
        noteName: 'A2',
        duration: '2m',
        velocity: 0.2
      },
  ],
  duration: '6m'
}

const reverb = {
  wet: 1,
  decay: 2,
  preDelay: 0.03
}

const chebyshev = {
  wet: 0,
  order: 50,
  oversample: 'none'
}

const vibrato = {
  wet: 0.2,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.5,
  type: 'sine'
}


export { channel, sequence, reverb, chebyshev, vibrato }