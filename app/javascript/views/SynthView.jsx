import * as Tone from "tone";
import React, { Component } from "react";

import Play from "../modules/Play.jsx";
import Pan from "../modules/Pan.jsx";
import Delay from "../modules/Delay.jsx";
import Reverb from "../modules/Reverb.jsx";
import Envelope from "../modules/Envelope.jsx";
import Chorus from "../modules/Chorus.jsx";
import Modal from "../view_components/Modal.jsx";
import Channel from "../modules/Channel.jsx";
import EffectsWrapper from "../view_components/EffectsWrapper.jsx";
import ToneSynth from "../modules/ToneSynth.jsx";
import Chebyschev from "../modules/Chebyschev.jsx";
import Vibrato from "../modules/Vibrato.jsx";
import FeedbackDelay from "../modules/FeedbackDelay";
import Distortion from "../modules/Distortion";

import * as drumsSettings from "../tunes/drums.js";
import * as seaSettings from "../tunes/sea.js";
import * as georgianSettings from "../tunes/georgian.js";
import * as melodySettings from "../tunes/melody.js";
import * as glSettings from "../tunes/gl.js";
import * as treeSettings from "../tunes/tree.js";
import * as apSettings from "../tunes/ap.js";
import * as alSettings from "../tunes/al.js";
import * as melody2Settings from "../tunes/melody2.js";
import * as windSettings from "../tunes/wind.js";
import * as ilSettings from "../tunes/il.js";
import * as ipSettings from "../tunes/ip.js";
import * as melody3Settings from "../tunes/melody3.js";

let seasamplerChannel;
let georgiansamplerChannel;
let glChannel;
let treeChannel;
let apChannel;
let melodyChannel;
let alChannel;
let melody2Channel;
let windChannel;
let ilChannel;
let ipChannel;
let melody3Channel;
let seasamplerPingPongDelay;
let georgiansamplerChorus;
let georgiansamplerPingPongDelay;
let ipChorus;
let ipPingPongDelay;
let treePingPongDelay;
let apPingPongDelay;
let apDistortion;
let glReverb;
let glChebyshev;
let glVibrato;
let melodySynth;
let melodyChorus;
let melodyPingPongDelay;
let melody2Synth;
let melody2Chorus;
let melody2PingPongDelay;
let melody3Synth;
let melody3Chorus;
let melody3PingPongDelay;
let melody3Distortion;
let alReverb;
let alFeedbackDelay;
let alVibrato;
let ilReverb;
let ilChebyshev;
let ilChorus;
let windPingPongDelay;

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drumsSettings,
      seaSettings,
      georgianSettings,
      melodySettings,
      glSettings,
      treeSettings,
      apSettings,
      alSettings,
      melody2Settings,
      windSettings,
      ilSettings,
      ipSettings,
      melody3Settings,
    };
  }

  handleFirstStart = () => {
    const { seaSettings } = this.state;
    const seasampler = new Tone.Sampler({
      urls: {
        A1: "ocean.mp3",
        A2: "seagull.mp3",
        A3: "00019-Linn-9000-Stick.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    seasamplerChannel = new Tone.Channel(seaSettings.channel);

    seasamplerPingPongDelay = new Tone.PingPongDelay(
      seaSettings.pingPongDelay
    ).toDestination();

    seasampler.chain(seasamplerChannel, seasamplerPingPongDelay);

    const seaPart = new Tone.Part((time, note) => {
      seasampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, seaSettings.sequence.steps).start(0);

    seaPart.loopEnd = seaSettings.sequence.duration;
    seaPart.loop = true;

    Tone.start();
    Tone.Transport.start();
  };

  handleSecondStart = () => {
    const { georgianSettings } = this.state;
    const georgiansampler = new Tone.Sampler({
      urls: {
        A1: "sud.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    georgiansamplerChannel = new Tone.Channel(georgianSettings.channel);

    georgiansamplerPingPongDelay = new Tone.PingPongDelay(
      georgianSettings.pingPongDelay
    );
    georgiansamplerChorus = new Tone.Chorus(
      georgianSettings.chorus
    ).toDestination();

    georgiansampler.chain(
      georgiansamplerChannel,
      georgiansamplerPingPongDelay,
      georgiansamplerChorus
    );

    const georgianPart = new Tone.Part((time, note) => {
      georgiansampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, georgianSettings.sequence.steps).start(0);

    georgianPart.loopEnd = georgianSettings.sequence.duration;
    georgianPart.loop = true;
  };

  handleThirdStart = () => {
    const { glSettings } = this.state;
    const glsampler = new Tone.Sampler({
      urls: {
        A1: "gorg.mp3",
        A2: "gorg2.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    glChannel = new Tone.Channel(glSettings.channel);
    glChebyshev = new Tone.Chebyshev(glSettings.chebyshev);
    glVibrato = new Tone.Vibrato(glSettings.vibrato);
    glReverb = new Tone.Reverb(glSettings.reverb).toDestination();

    glsampler.chain(glChannel, glVibrato, glChebyshev, glReverb);

    const glPart = new Tone.Part((time, note) => {
      glsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, glSettings.sequence.steps).start(0);

    glPart.loopEnd = glSettings.sequence.duration;
    glPart.loop = true;
  };

  handleFourthStart = () => {
    const { melodySettings } = this.state;
    melodySynth = new Tone.Synth(melodySettings.synth);

    melodyChannel = new Tone.Channel(melodySettings.channel);
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start();
    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination();

    melodySynth.chain(melodyChannel, melodyChorus, melodyPingPongDelay);

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, melodySettings.sequence.steps).start(0);

    melodyPart.loopEnd = melodySettings.sequence.duration;
    melodyPart.loop = true;
  };

  handleFiveStart = () => {
    const { treeSettings } = this.state;
    const treesampler = new Tone.Sampler({
      urls: {
        A1: "list.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    treeChannel = new Tone.Channel(treeSettings.channel);
    treePingPongDelay = new Tone.PingPongDelay(
      treeSettings.pingPongDelay
    ).toDestination();

    treesampler.chain(treeChannel, treePingPongDelay);

    const treePart = new Tone.Part((time, note) => {
      treesampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, treeSettings.sequence.steps).start(0);

    treePart.loopEnd = treeSettings.sequence.duration;
    treePart.loop = true;
  };

  handleSixStart = () => {
    const { apSettings } = this.state;
    const apsampler = new Tone.Sampler({
      urls: {
        A1: "ura.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    apChannel = new Tone.Channel(apSettings.channel);
    apDistortion = new Tone.Distortion(apSettings.distortion);
    apPingPongDelay = new Tone.PingPongDelay(
      apSettings.pingPongDelay
    ).toDestination();

    apsampler.chain(apChannel, apDistortion, apPingPongDelay);

    const apPart = new Tone.Part((time, note) => {
      apsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, apSettings.sequence.steps).start(0);

    apPart.loopEnd = apSettings.sequence.duration;
    apPart.loop = true;
  };

  handleSevenStart = () => {
    const { alSettings } = this.state;
    const alsampler = new Tone.Sampler({
      urls: {
        A1: "laugh.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    alChannel = new Tone.Channel(alSettings.channel);
    alFeedbackDelay = new Tone.FeedbackDelay(alSettings.feedbackDelay);
    alVibrato = new Tone.Vibrato(alSettings.vibrato);
    alReverb = new Tone.Reverb(glSettings.reverb).toDestination();
    alsampler.chain(alChannel, alVibrato, alFeedbackDelay, alReverb);

    const alPart = new Tone.Part((time, note) => {
      alsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, alSettings.sequence.steps).start(0);

    alPart.loopEnd = alSettings.sequence.duration;
    alPart.loop = true;
  };

  handleEightStart = () => {
    const { melody2Settings } = this.state;
    melody2Synth = new Tone.Synth(melody2Settings.synth);

    melody2Channel = new Tone.Channel(melody2Settings.channel);
    melody2Chorus = new Tone.Chorus(melody2Settings.chorus).start();
    melody2PingPongDelay = new Tone.PingPongDelay(
      melody2Settings.pingPongDelay
    ).toDestination();

    melody2Synth.chain(melody2Channel, melody2Chorus, melody2PingPongDelay);

    const melody2Part = new Tone.Part((time, note) => {
      melody2Synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, melody2Settings.sequence.steps).start(0);

    melody2Part.loopEnd = melody2Settings.sequence.duration;
    melody2Part.loop = true;
  };

  handleNineStart = () => {
    const { windSettings } = this.state;
    const windsampler = new Tone.Sampler({
      urls: {
        A1: "iswind.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    windChannel = new Tone.Channel(windSettings.channel);

    windPingPongDelay = new Tone.PingPongDelay(
      windSettings.pingPongDelay
    ).toDestination();

    windsampler.chain(windChannel, windPingPongDelay);

    const windPart = new Tone.Part((time, note) => {
      windsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, windSettings.sequence.steps).start(0);

    windPart.loopEnd = windSettings.sequence.duration;
    windPart.loop = true;
  };

  handleTenStart = () => {
    const { ipSettings } = this.state;
    const ipsampler = new Tone.Sampler({
      urls: {
        A1: "world.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    ipChannel = new Tone.Channel(ipSettings.channel);

    ipPingPongDelay = new Tone.PingPongDelay(ipSettings.pingPongDelay);
    ipChorus = new Tone.Chorus(ipSettings.chorus).toDestination();

    ipsampler.chain(ipChannel, ipPingPongDelay, ipChorus);

    const ipPart = new Tone.Part((time, note) => {
      ipsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, ipSettings.sequence.steps).start(0);

    ipPart.loopEnd = georgianSettings.sequence.duration;
    ipPart.loop = true;
  };

  handleElevenStart = () => {
    const { ilSettings } = this.state;
    const ilsampler = new Tone.Sampler({
      urls: {
        A1: "hava.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    ilChannel = new Tone.Channel(ilSettings.channel);
    ilReverb = new Tone.Reverb(ilSettings.reverb);
    ilChorus = new Tone.Chorus(ilSettings.chorus);
    ilChebyshev = new Tone.Chebyshev(ilSettings.chebyshev).toDestination();

    ilsampler.chain(ilChannel, ilReverb, ilChorus, ilChebyshev);

    const ilPart = new Tone.Part((time, note) => {
      ilsampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, ilSettings.sequence.steps).start(0);

    ilPart.loopEnd = ilSettings.sequence.duration;
    ilPart.loop = true;
  };

  handleTwelveStart = () => {
    const { melody3Settings } = this.state;
    melody3Synth = new Tone.Synth(melody3Settings.synth);

    melody3Channel = new Tone.Channel(melody3Settings.channel);
    melody3Chorus = new Tone.Chorus(melody3Settings.chorus);
    melody3Distortion = new Tone.Distortion(melody3Settings.distortion);
    melody3PingPongDelay = new Tone.PingPongDelay(
      melody3Settings.pingPongDelay
    ).toDestination();

    melody3Synth.chain(
      melody3Channel,
      melody3Chorus,
      melody3Distortion,
      melody3PingPongDelay
    );

    const melody3Part = new Tone.Part((time, note) => {
      melody3Synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, melody3Settings.sequence.steps).start(0);

    melody3Part.loopEnd = melody3Settings.sequence.duration;
    melody3Part.loop = true;
  };

  handleSeaValueChange = (property, value) => {
    const { seaSettings } = this.state;

    if (property === "channelVolume") {
      seasamplerChannel.volume.value = value;
      seaSettings.channel.volume = value;
    } else if (property === "channelPan") {
      seasamplerChannel.pan.value = value;
      seaSettings.channel.pan = value;
    } else if (property === "pingPongDelayWet") {
      seasamplerPingPongDelay.wet.value = value;
      seaSettings.pingPongDelay.wet = value;
    }

    this.setState({
      seaSettings,
    });
  };

  handleGeorgianValueChange = (property, value) => {
    const { georgianSettings } = this.state;

    if (property === "channelVolume") {
      georgiansamplerChannel.volume.value = value;
      georgianSettings.channel.volume = value;
    } else if (property === "channelPan") {
      georgiansamplerChannel.pan.value = value;
      georgianSettings.channel.pan = value;
    } else if (property === "chorusWet") {
      georgiansamplerChorus.wet.value = value;
      georgianSettings.chorus.wet = value;
    }

    this.setState({
      georgianSettings,
    });
  };

  handleIpValueChange = (property, value) => {
    const { ipSettings } = this.state;

    if (property === "channelVolume") {
      ipChannel.volume.value = value;
      ipSettings.channel.volume = value;
    } else if (property === "channelPan") {
      ipChannel.pan.value = value;
      ipSettings.channel.pan = value;
    } else if (property === "chorusWet") {
      ipChorus.wet.value = value;
      ipSettings.chorus.wet = value;
    }

    this.setState({
      ipSettings,
    });
  };

  handleGlValueChange = (property, value) => {
    const { glSettings } = this.state;

    if (property === "channelVolume") {
      glChannel.volume.value = value;
      glSettings.channel.volume = value;
    } else if (property === "channelPan") {
      glChannel.pan.value = value;
      glSettings.channel.pan = value;
    } else if (property === "chebyshevWet") {
      glChebyshev.wet.value = value;
      glSettings.chebyshev.wet = value;
    } else if (property === "reverbWet") {
      glReverb.wet.value = value;
      glSettings.reverb.wet = value;
    } else if (property === "vibrato") {
      glVibrato.depth.value = value;
      glSettings.vibrato.depth = value;
    }

    this.setState({
      glSettings,
    });
  };

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state;

    if (property === "synthType") {
      melodySynth.oscillator.type = value;
      melodySettings.synth.oscillator.type = value;
    } else if (property === "pingPongDelayWet") {
      melodyPingPongDelay.wet.value = value;
      melodySettings.pingPongDelay.wet = value;
    } else if (property === "chorusWet") {
      melodyChorus.wet.value = value;
      melodySettings.chorus.wet = value;
    } else if (property === "synthEnvelopeAttack") {
      melodySynth.envelope.attack = value;
      melodySettings.synth.envelope.attack = value;
    } else if (property === "synthEnvelopeDecay") {
      melodySynth.envelope.decay = value;
      melodySettings.synth.envelope.decay = value;
    } else if (property === "synthEnvelopeSustain") {
      melodySynth.envelope.sustain = value;
      melodySettings.synth.envelope.sustain = value;
    } else if (property === "synthEnvelopeRelease") {
      melodySynth.envelope.release = value;
      melodySettings.synth.envelope.release = value;
    } else if (property === "channelVolume") {
      melodyChannel.volume.value = value;
      melodySettings.channel.volume = value;
    } else if (property === "channelPan") {
      melodyChannel.pan.value = value;
      melodySettings.channel.pan = value;
    }

    this.setState({
      melodySettings,
    });
  };

  handleTreeValueChange = (property, value) => {
    const { treeSettings } = this.state;

    if (property === "channelVolume") {
      treeChannel.volume.value = value;
      treeSettings.channel.volume = value;
    } else if (property === "channelPan") {
      treeChannel.pan.value = value;
      treeSettings.channel.pan = value;
    }

    this.setState({
      treeSettings,
    });
  };

  handleApValueChange = (property, value) => {
    const { apSettings } = this.state;

    if (property === "channelVolume") {
      apChannel.volume.value = value;
      apSettings.channel.volume = value;
    } else if (property === "channelPan") {
      apChannel.pan.value = value;
      apSettings.channel.pan = value;
    }

    this.setState({
      apSettings,
    });
  };

  handleAlValueChange = (property, value) => {
    const { alSettings } = this.state;

    if (property === "channelVolume") {
      alChannel.volume.value = value;
      alSettings.channel.volume = value;
    } else if (property === "channelPan") {
      alChannel.pan.value = value;
      alSettings.channel.pan = value;
    } else if (property === "feedback") {
      alFeedbackDelay.wet.value = value;
      alSettings.feedbackDelay.wet = value;
    } else if (property === "vibrato") {
      alVibrato.depth.value = value;
      alSettings.vibrato.depth = value;
    } else if (property === "reverbWet") {
      alReverb.wet.value = value;
      alSettings.reverb.wet = value;
    }

    this.setState({
      alSettings,
    });
  };

  handleMelody2ValueChange = (property, value) => {
    const { melody2Settings } = this.state;

    if (property === "synthType") {
      melody2Synth.oscillator.type = value;
      melody2Settings.synth.oscillator.type = value;
    } else if (property === "synthEnvelopeAttack") {
      melody2Synth.envelope.attack = value;
      melody2Settings.synth.envelope.attack = value;
    } else if (property === "synthEnvelopeDecay") {
      melody2Synth.envelope.decay = value;
      melody2Settings.synth.envelope.decay = value;
    } else if (property === "synthEnvelopeRelease") {
      melody2Synth.envelope.release = value;
      melody2Settings.synth.envelope.release = value;
    } else if (property === "channelPan") {
      melody2Channel.pan.value = value;
      melody2Settings.channel.pan = value;
    }

    this.setState({
      melody2Settings,
    });
  };

  handleWindValueChange = (property, value) => {
    const { windSettings } = this.state;

    if (property === "channelVolume") {
      windChannel.volume.value = value;
      windSettings.channel.volume = value;
    } else if (property === "channelPan") {
      windChannel.pan.value = value;
      windSettings.channel.pan = value;
    } else if (property === "pingPongDelayWet") {
      windPingPongDelay.wet.value = value;
      windSettings.pingPongDelay.wet = value;
    }

    this.setState({
      windSettings,
    });
  };

  handleIlValueChange = (property, value) => {
    const { ilSettings } = this.state;

    if (property === "channelVolume") {
      ilChannel.volume.value = value;
      ilSettings.channel.volume = value;
    } else if (property === "channelPan") {
      ilChannel.pan.value = value;
      ilSettings.channel.pan = value;
    } else if (property === "chebyshevWet") {
      ilChebyshev.wet.value = value;
      ilSettings.chebyshev.wet = value;
    } else if (property === "reverbWet") {
      ilReverb.wet.value = value;
      ilSettings.reverb.wet = value;
    } else if (property === "chorusWet") {
      ilChorus.wet.value = value;
      ilSettings.chorus.wet = value;
    }

    this.setState({
      ilSettings,
    });
  };

  handleMelody3ValueChange = (property, value) => {
    const { melody3Settings } = this.state;

    if (property === "synthType") {
      melody3Synth.oscillator.type = value;
      melody3Settings.synth.oscillator.type = value;
    } else if (property === "channelVolume") {
      melody3Channel.volume.value = value;
      melody3Settings.channel.volume = value;
    } else if (property === "channelPan") {
      melody3Channel.pan.value = value;
      melody3Settings.channel.pan = value;
    } else if (property === "distortionWet") {
      melody3Distortion.wet.value = value;
      melody3Settings.distortion.wet = value;
    }

    this.setState({
      melodySettings,
    });
  };

  render() {
    const {
      seaSettings,
      georgianSettings,
      melodySettings,
      glSettings,
      treeSettings,
      apSettings,
      alSettings,
      melody2Settings,
      windSettings,
      ipSettings,
      ilSettings,
      melody3Settings,
    } = this.state;

    return (
      <div className="Container">
        <div className="column" id="left">
          <Modal modalid="g" add="b" modaltype="big" appname="georgia.app">
            <div className="synth">
              <Pan
                settings={seaSettings}
                handleValueChange={this.handleSeaValueChange}
              />
              <Play
                handleValueChange={this.handleFirstStart}
                type="ocean"
                text="georg symbol"
              />
              <h2>symbol</h2>
            </div>
            <div className="synth">
              <Pan
                settings={georgianSettings}
                handleValueChange={this.handleGeorgianValueChange}
              />
              <Play
                handleValueChange={this.handleSecondStart}
                type="gperson"
                text="georg people"
              />
              <h2>people</h2>
            </div>
            <div className="synth">
              <Pan
                settings={glSettings}
                handleValueChange={this.handleGlValueChange}
              />
              <Play
                handleValueChange={this.handleThirdStart}
                type="gl"
                text="georg language"
              />
              <h2>language</h2>
            </div>
            <div className="synth">
              <Pan
                settings={melodySettings}
                handleValueChange={this.handleMelodyValueChange}
              />
              <Play
                handleValueChange={this.handleFourthStart}
                type="guitar"
                text="georg guitar"
              />
              <h2>music</h2>
            </div>
          </Modal>
          <Modal modalid="a" add="b" modaltype="big" appname="armenia.app">
            <div className="synth">
              <Pan
                settings={treeSettings}
                handleValueChange={this.handleTreeValueChange}
              />
              <Play
                handleValueChange={this.handleFiveStart}
                type="tree"
                text="armenian symbol"
              />
              <h2>symbol</h2>
            </div>
            <div className="synth">
              <Pan
                settings={apSettings}
                handleValueChange={this.handleApValueChange}
              />
              <Play
                handleValueChange={this.handleSixStart}
                type="ap"
                text="armenian people"
              />
              <h2>people</h2>
            </div>
            <div className="synth">
              <Pan
                settings={alSettings}
                handleValueChange={this.handleAlValueChange}
              />
              <Play
                handleValueChange={this.handleSevenStart}
                type="al"
                text="armenian language"
              />
              <h2>language</h2>
            </div>
            <div className="synth">
              <Pan
                settings={melody2Settings}
                handleValueChange={this.handleMelody2ValueChange}
              />
              <Play
                handleValueChange={this.handleEightStart}
                type="dudka"
                text="dudka"
              />
              <h2>music</h2>
            </div>
          </Modal>
          <Modal modalid="i" add="b" modaltype="big" appname="israel.app">
            <div className="synth">
              <Pan
                settings={windSettings}
                handleValueChange={this.handleWindValueChange}
              />
              <Play
                handleValueChange={this.handleNineStart}
                type="wind"
                text="israel Symbol"
              />
              <h2>symbol</h2>
            </div>
            <div className="synth">
              <Pan
                settings={ipSettings}
                handleValueChange={this.handleIpValueChange}
              />
              <Play
                handleValueChange={this.handleTenStart}
                type="ip"
                text="israel person"
              />
              <h2>people</h2>
            </div>
            <div className="synth">
              <Pan
                settings={glSettings}
                handleValueChange={this.handleIlValueChange}
              />
              <Play
                handleValueChange={this.handleElevenStart}
                type="il"
                text="israel language"
              />
              <h2>language</h2>
            </div>
            <div className="synth">
              <Pan
                settings={melodySettings}
                handleValueChange={this.handleMelody3ValueChange}
              />
              <Play
                handleValueChange={this.handleTwelveStart}
                type="baraban"
                text="israel baraban"
              />
              <h2>music</h2>
            </div>
          </Modal>
          <Modal
            modalid="n"
            mbid="notes"
            modaltype="notemodal"
            appname="notes.app"
          ></Modal>
        </div>
        <div className="column" id="right">
          <Modal modalid="g" mbid="col" appname="georgia.settings">
            <div className="row">
              <EffectsWrapper synthname="SYMBOL">
                <Channel
                  settings={seaSettings}
                  handleValueChange={this.handleSeaValueChange}
                />
                <Delay
                  settings={seaSettings}
                  handleValueChange={this.handleSeaValueChange}
                />
              </EffectsWrapper>
              <EffectsWrapper synthname="PEOPLE">
                <Channel
                  settings={georgianSettings}
                  handleValueChange={this.handleGeorgianValueChange}
                />
                <Chorus
                  settings={georgianSettings}
                  handleValueChange={this.handleGeorgianValueChange}
                />
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="LANGUAGE">
                <div className="hor">
                  <div className="horhor">
                    <Channel
                      settings={glSettings}
                      handleValueChange={this.handleGlValueChange}
                    />
                    <Chebyschev
                      settings={glSettings}
                      handleValueChange={this.handleGlValueChange}
                    />
                    <Vibrato
                      settings={glSettings}
                      handleValueChange={this.handleGlValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <h3 id="knobbing">Reverb Wet</h3>
                    <Reverb
                      settings={glSettings}
                      handleValueChange={this.handleGlValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="MUSIC">
                <div className="hor">
                  <div className="horhor">
                    <Channel
                      settings={melodySettings}
                      handleValueChange={this.handleMelodyValueChange}
                    />
                    <Delay
                      settings={melodySettings}
                      handleValueChange={this.handleMelodyValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <ToneSynth
                      settings={melodySettings}
                      handleValueChange={this.handleMelodyValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
          </Modal>
          <Modal modalid="a" mbid="col" appname="armenia.settings">
            <div className="row">
              <EffectsWrapper synthname="SYMBOL">
                <Channel
                  settings={treeSettings}
                  handleValueChange={this.handleTreeValueChange}
                />
              </EffectsWrapper>
              <EffectsWrapper synthname="PEOPLE">
                <Channel
                  settings={apSettings}
                  handleValueChange={this.handleApValueChange}
                />
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="LANGUAGE">
                <div className="hor">
                  <div className="horhor">
                    <Channel
                      settings={alSettings}
                      handleValueChange={this.handleAlValueChange}
                    />
                    <FeedbackDelay
                      settings={alSettings}
                      handleValueChange={this.handleAlValueChange}
                    />
                    <Vibrato
                      settings={alSettings}
                      handleValueChange={this.handleAlValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <h3 id="knobbing">Reverb Wet</h3>
                    <Reverb
                      settings={alSettings}
                      handleValueChange={this.handleAlValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="MUSIC">
                <div className="hor">
                  <div className="horhor">
                    <Envelope
                      settings={melody2Settings}
                      handleValueChange={this.handleMelody2ValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <ToneSynth
                      settings={melody2Settings}
                      handleValueChange={this.handleMelody2ValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
          </Modal>
          <Modal modalid="i" mbid="col" appname="israel.settings">
            <div className="row">
              <EffectsWrapper synthname="SYMBOL">
                <Channel
                  settings={windSettings}
                  handleValueChange={this.handleWindValueChange}
                />
                <Delay
                  settings={windSettings}
                  handleValueChange={this.handleWindValueChange}
                />
              </EffectsWrapper>
              <EffectsWrapper synthname="PEOPLE">
                <Channel
                  settings={ipSettings}
                  handleValueChange={this.handleIpValueChange}
                />
                <Chorus
                  settings={ipSettings}
                  handleValueChange={this.handleIpValueChange}
                />
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="LANGUAGE">
                <div className="hor">
                  <div className="horhor">
                    <Channel
                      settings={ilSettings}
                      handleValueChange={this.handleIlValueChange}
                    />
                    <Chebyschev
                      settings={ilSettings}
                      handleValueChange={this.handleIlValueChange}
                    />
                    <Chorus
                      settings={ilSettings}
                      handleValueChange={this.handleIlValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <h3 id="knobbing">Reverb Wet</h3>
                    <Reverb
                      settings={ilSettings}
                      handleValueChange={this.handleIlValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
            <div className="row">
              <EffectsWrapper synthname="MUSIC">
                <div className="hor">
                  <div className="horhor">
                    <Channel
                      settings={melody3Settings}
                      handleValueChange={this.handleMelody3ValueChange}
                    />
                    <Distortion
                      settings={melody3Settings}
                      handleValueChange={this.handleMelody3ValueChange}
                    />
                  </div>
                  <div className="horhor">
                    <ToneSynth
                      settings={melody3Settings}
                      handleValueChange={this.handleMelody3ValueChange}
                    />
                  </div>
                </div>
              </EffectsWrapper>
            </div>
          </Modal>
        </div>
        <Modal modalid="todo" mbid="notes" modaltype="todomodal"></Modal>
        <Modal
          modalid="title"
          mbid="notes"
          appname="--DIGITAL SOUND TRIP--"
        ></Modal>
      </div>
    );
  }
}
