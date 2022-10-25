const channel = {
  volume: -30,
  mute: false,
  pan: 0
}


const synth = {
  volume: 0,
  // detune: 0,
  portamento: 0.1,
  // envelope: {
  //   attack: 0.01,
  //   attackCurve: 'exponential',
  //   decay: 0.2,
  //   decayCurve: 'exponential',
  //   sustain: 0.2,
  //   release: 1.5,
  //   releaseCurve: 'exponential'
  // },
  oscillator: {
    type: 'sawtooth',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
    // modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    // phase: 0,
    // harmonicity: 0.5
  }
}

const pingPongDelay = {
  wet: 0.05,
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
      noteName: 'C3',
      duration: '8n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'E2',
      duration: '16n',
      velocity: 1
    },
    {
      time: '0:5:0',
      noteName: 'G2',
      duration: '8n',
      velocity: 1
    },
    {
      time: '0:7:0',
      noteName: 'E2',
      duration: '16n',
      velocity: 1
    },
    {
      time: '0:9:0',
      noteName: 'G2',
      duration: '8n',
      velocity: 1
    },
    {
      time: '0:7:0',
      noteName: 'E2',
      duration: '16n',
      velocity: 1
    },
    {
      time: '0:9:0',
      noteName: 'G2',
      duration: '8n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'B3',
      duration: '8n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'D3',
      duration: '8n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'C3',
      duration: '8n',
      velocity: 1
    },
    {
      time: '0:9:0',
      noteName: 'G2',
      duration: '8n',
      velocity: 1
    },
  ],
  duration: '4m'
}

export { synth, chorus, pingPongDelay, sequence, channel }