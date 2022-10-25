const channel = {
  volume: -20,
  mute: false,
  pan: 0,
};

const sequence = {
  steps: [
    {
      time: "3:0:0",
      noteName: "A1",
      duration: "2m",
      velocity: 1,
    },
  ],
  duration: "4m",
};

const distortion = {
    wet: 0.5,
    distortion: 1,
    oversample: '4x'
}

const pingPongDelay = {
  wet: 0.5,
  delayTime: 0.25,
  maxDelayTime: 1,
};

export { channel, sequence, pingPongDelay, distortion };
