const channel = {
  volume: -5,
  mute: false,
  pan: 0
}

const distortion = {
  wet: 0,
  distortion: 0.5,
  oversample: '4x'
}

const synth = {
  volume: 0,
  // detune: 0,
  portamento: 0.1,
  envelope: {
    attack: 0.01,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sine',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
    // modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    // phase: 0,
    // harmonicity: 0.5
  }
}

const pingPongDelay = {
  wet: 1,
  delayTime: 0.25,
  maxDelayTime: 1
}
const chorus = {
    wet: 0,
    type: 'sine',
    frequency: 10,
    delayTime: 10,
    depth: 0.7,
    spread: 180
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:0:2',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'E2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'G2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:1',
      noteName: 'E2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'G2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'D2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'G2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'E2',
      duration: '4n',
      velocity: 0.7
    },
    {
      time: '1:1:3',
      noteName: 'D2',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '1:2:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'G2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:2',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    }
  ],
  duration: '2m'
}

export { synth, chorus, pingPongDelay, sequence, channel, distortion }