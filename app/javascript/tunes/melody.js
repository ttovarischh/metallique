const channel = {
  volume: 0,
  mute: false
}

const synth = {
  detune: 1,
  portamento: 0.2,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'triangle',
    modulationType: 'triangle',
    phase: 0,
    harmonicity: 3
  }
}

const synthUI = {
  envelopeShow: false
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const distortion = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const bitCrusher = {
  wet: 0,
  bits: 4
}

const pingPongDelay = { wet: 0.6, delayTime: 0.25, maxDelayTime: 1 }

const presets = {
  default: {
    synth: {
      volume: -15,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'triangle',
        modulationType: 'sine',
        phase: 0,
        harmonicity: 0.5
      }
    },
    chorus: {
      wet: 0.3,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    },
    distortion: { wet: 0, distortion: 0, oversample: '4x' },
    bitCrusher: { wet: 0, bits: 4 },
    pingPongDelay: { wet: 0.6, delayTime: 0.25, maxDelayTime: 1 }
  },
  preset1: {
    synth: {
      volume: -15,
      detune: 0,
      portamento: 0.6,
      envelope: {
        attack: 0.2,
        attackCurve: 'exponential',
        decay: 0.1,
        decayCurve: 'exponential',
        sustain: 0.4,
        release: 0.3,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'triangle',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    },
    chorus: {
      wet: 1,
      type: 'sawtooth',
      frequency: 20,
      delayTime: 7,
      depth: 0,
      spread: 190
    },
    distortion: { wet: 0, distortion: 0, oversample: 'none' },
    bitCrusher: { wet: 0, bits: 4 },
    pingPongDelay: { wet: 0.2, delayTime: 0.6, maxDelayTime: 1 }
  },
  preset2: {
    synth: {
      volume: -15,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'square',
        modulationType: 'sine',
        phase: 0,
        harmonicity: 0.5
      }
    },
    chorus: {
      wet: 0.3,
      type: 'sine',
      frequency: 50,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    },
    distortion: { wet: 0.3, distortion: 0, oversample: '4x' },
    bitCrusher: { wet: 0.5, bits: 4 },
    pingPongDelay: { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }
  },
  current: 'default'
}

const sequence = {
  tapping: [
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
    {
      time: '0:0:0',
      noteName: 'F4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'F4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'D4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'D4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:2:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:3:0',
      noteName: 'G2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:3:2',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:0:0',
      noteName: 'B3',
      duration: '2n',
      velocity: 1
    },
    {
      time: '3:1:0',
      noteName: 'D3',
      duration: '2n',
      velocity: 1
    },
    {
      time: '3:3:0',
      noteName: 'C3',
      duration: '2n',
      velocity: 1
    },
  ],
  grind: [
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
      time: '2:0:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:2:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:3:0',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '3:0:0',
      noteName: 'B4',
      duration: '2n',
      velocity: 1
    },
    {
      time: '3:1:0',
      noteName: 'D4',
      duration: '2n',
      velocity: 1
    },
    {
      time: '3:3:0',
      noteName: 'C3',
      duration: '2n',
      velocity: 1
    },
  ],
  duration: '4m',
  loop: true,
  current: 'tapping'
}

export {
  synth,
  synthUI,
  chorus,
  distortion,
  bitCrusher,
  pingPongDelay,
  presets,
  sequence,
  channel
}
