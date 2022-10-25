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

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 10,
  delayTime: 10,
  depth: 0.7,
  spread: 180
}

const chebyshev = {
  wet: 0.5,
  order: 50,
  oversample: 'none'
}

const reverb = {
  wet: 0,
  decay: 2,
  preDelay: 0.03
}


export { channel, sequence, chorus, chebyshev, reverb}