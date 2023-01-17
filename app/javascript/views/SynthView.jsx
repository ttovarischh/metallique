import * as Tone from "tone";
import React, { Component } from "react";

import Modal from "../view_components/Modal.jsx";
import PPDView from "../view_components/PPDView.jsx";

import * as bassSettings from "../tunes/bass.js";
import * as melodySettings from "../tunes/melody.js";
import * as drumsSettings from "../tunes/drums.js";

import ToneSynth from "../modules/ToneSynth.jsx";
import DistortionEffect from "../modules/DistortionEffect.jsx";
import BitCrusherEffect from "../modules/BitCrusherEffect.jsx";
import VibratoEffect from "../modules/VibratoEffect.jsx";
import PingPongDelayEffect from "../modules/PingPongDelayEffect.jsx";
import Channel from "../modules/Channel.jsx";

import SC_ToggleButtonSet from "../components/SC_ToggleButtonSet.jsx";
import SC_ToggleButton from "../components/SC_ToggleButton";
import SC_Button from "../components/SC_Button";
import SC_Slider from "../components/SC_Slider";
import Select from "../components/Select";
import Surface from "../components/Surface.jsx";

let bassSynth;
let bassChorus;
let bassDistortion;
let bassBitCrusher;
let bassPingPongDelay;
let bassPart;
let bassChannel;

let melodySynth;
let melodyChorus;
let melodyDistortion;
let melodyBitCrusher;
let melodyPingPongDelay;
let melodyPart;
let melody;
let melodyChannel;

let sampler;
let samplerChannel;
let drumsPingPongDelay;
let drumsVibrato;

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pOpened: true,
      vOpened: false,
      dOpened: true,
      bOpened: false,
      isStarted: false,
      isUIShown: true,
      bpm: 80,
      melodyChangeMeasureSelect: false,
      melodyChangeMeasure: 8,
      melodyChangeRandom: false,
      melodyChange: false,
      random: false,
      bassSettings,
      melodySettings,
      drumsSettings,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);

    document.addEventListener(
      "click",
      this.handleMelodyChangeMeasureSelectClose
    );
  }

  shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // prettier-ignore
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  handleToggle = () => {
    const { pOpened, vOpened } = this.state;

    this.setState({
      pOpened: !pOpened,
      vOpened: !vOpened,
    });
  };

  handleSecondToggle = () => {
    const { dOpened, bOpened } = this.state;

    this.setState({
      dOpened: !dOpened,
      bOpened: !bOpened,
    });
  };

  handleMelodyChangeMeasureSelectClose = (e) => {
    if (e.target.classList[0] != "currentValue") {
      this.setState({
        melodyChangeMeasureSelect: false,
      });
    }
  };

  handleMelodyChangeMeasureSelectOpen = () => {
    this.setState({
      melodyChangeMeasureSelect: true,
    });
  };

  handleMelodyChangeMeasure = (property, value) => {
    this.setState({
      melodyChangeMeasureSelect: false,
      melodyChangeMeasure: value,
    });
  };

  handleMelodyChangeRandom = () => {
    const { melodyChangeRandom } = this.state;

    this.setState({
      melodyChangeRandom: !melodyChangeRandom,
    });
  };

  handleMelodyChange = () => {
    const { melodyChange } = this.state;

    this.setState({
      melodyChange: !melodyChange,
    });
  };

  handleKeydown = (e) => {
    console.log(e.key, e.code, e.keyCode);

    switch (e.keyCode) {
      case 49:
        this.handleMelodySequenceChange("", "tapping");
        break;
      case 50:
        this.handleMelodySequenceChange("", "grind");
        break;
      case 81:
        sampler.triggerAttackRelease("A3", "1n");
        break;
    }
  };

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings } = this.state;

    bassSynth = new Tone.Synth(bassSettings.synth);
    bassChorus = new Tone.Chorus(bassSettings.chorus).start();

    bassDistortion = new Tone.Distortion(bassSettings.distortion);
    bassBitCrusher = new Tone.BitCrusher(bassSettings.bitCrusher);

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination();

    bassChannel = new Tone.Channel(bassSettings.channel).toDestination();

    bassSynth.chain(
      bassChannel,
      bassChorus,
      bassPingPongDelay,
      bassDistortion,
      bassBitCrusher
    );

    bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, bassSettings.sequence.steps1).start(0);

    bassPart.loopEnd = bassSettings.sequence.duration;
    bassPart.loop = bassSettings.sequence.loop;

    melodySynth = new Tone.Synth(melodySettings.synth);
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start();
    melodyDistortion = new Tone.Distortion(melodySettings.distortion);
    melodyBitCrusher = new Tone.BitCrusher(melodySettings.bitCrusher);

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination();

    melodyChannel = new Tone.Channel(melodySettings.channel).toDestination();

    melodySynth.chain(
      melodyChorus,
      melodyDistortion,
      melodyBitCrusher,
      melodyPingPongDelay,
      melodyChannel
    );

    melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, melodySettings.sequence[melodySettings.sequence.current]).start(0);

    melodyPart.loopEnd = melodySettings.sequence.duration;
    melodyPart.loop = melodySettings.sequence.loop;

    sampler = new Tone.Sampler({
      urls: {
        A1: "1.mp3",
        A2: "2.mp3",
        A3: "3.mp3",
        A4: "4.mp3",
        C1: "bellthree.mp3",
        C2: "3.mp3",
        C3: "2.mp3",
        C4: "1.mp3",
        E1: "3.mp3",
        E2: "1.mp3",
        E3: "1.mp3",
        E4: "2.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
    });

    drumsPingPongDelay = new Tone.PingPongDelay(
      drumsSettings.pingPongDelay
    ).toDestination();

    drumsVibrato = new Tone.Vibrato(drumsSettings.vibrato);

    samplerChannel = new Tone.Channel(drumsSettings.channel).toDestination();

    sampler.chain(samplerChannel, drumsPingPongDelay, drumsVibrato);

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      );
    }, drumsSettings.sequence.steps).start(0);

    drumsPart.loopEnd = drumsSettings.sequence.duration;
    drumsPart.loop = drumsSettings.sequence.loop;

    this.handleTransportChange("play", true);
  };

  nextMeasure = () => {
    const { melodyChangeMeasure, melodyChangeRandom, melodyChange } =
      this.state;

    if (melodyChange) {
      const position = Tone.Transport.position;
      const regexBefore = /([\w]+)/;
      let measure = parseInt(position.match(regexBefore)[1]) + 1;
      console.log("next measure", measure);

      const squaresPassed = Math.floor(measure / melodyChangeMeasure);

      if (
        measure == melodyChangeMeasure ||
        measure - squaresPassed * melodyChangeMeasure == 0
      ) {
        console.log("change");
        melodyPart.clear();

        if (melodyChangeRandom) {
          console.log("random");

          let notes = [];

          melodySettings.sequence.grind.forEach((item, i) => {
            notes.push(item.noteName);
          });

          notes = this.shuffle(notes);

          let randomizedSequence = [...melodySettings.sequence.grind];

          randomizedSequence.forEach((step, i) => {
            let newStep = Object.assign({}, step);
            newStep.noteName = notes[i];
            melodyPart.add(newStep);
          });
        } else {
          melodySettings.sequence.grind.forEach((step, i) => {
            melodyPart.add(step);
          });
        }
      } else if (
        measure == melodyChangeMeasure + 1 ||
        measure - squaresPassed * melodyChangeMeasure == 1
      ) {
        console.log("change back");
        melodyPart.clear();

        melodySettings.sequence.tapping.forEach((step, i) => {
          melodyPart.add(step);
        });
      }
    }
  };

  handleTransportChange = (property, value) => {
    const { bpm } = this.state;

    switch (property) {
      case "play":
        Tone.Transport.start();
        Tone.Transport.scheduleRepeat(this.nextMeasure, "1m");

        this.setState({
          isStarted: true,
        });
        break;
      case "bpm":
        Tone.Transport.bpm.value = value;

        this.setState({
          bpm: value,
        });
        break;
    }
  };

  handleValueChange = (instrumentName, property, value) => {
    const { bassSettings, melodySettings, drumsSettings } = this.state;

    let instrument;
    let chorus;
    let distortion;
    let pingPongDelay;
    let bitCrusher;
    let vibrato;
    let settings;

    if (instrumentName === "bass") {
      instrument = bassSynth;
      chorus = bassChorus;
      distortion = bassDistortion;
      pingPongDelay = bassPingPongDelay;
      bitCrusher = bassBitCrusher;
      settings = bassSettings;
    } else if (instrumentName === "melody") {
      instrument = melodySynth;
      chorus = melodyChorus;
      distortion = melodyDistortion;
      pingPongDelay = melodyPingPongDelay;
      bitCrusher = melodyBitCrusher;
      settings = melodySettings;
    } else if (instrumentName === "drums") {
      pingPongDelay = drumsPingPongDelay;
      vibrato = drumsVibrato;
      settings = drumsSettings;
    }

    switch (property) {
      case "synthType":
        instrument.oscillator.type = value;
        settings.synth.oscillator.type = value;
        break;
      case "synthShowEnvelope":
        settings.synthUI.envelopeShow = value;
        break;
      case "synthEnvelopeAttack":
        instrument.envelope.attack = value;
        settings.synth.envelope.attack = value;
        break;
      case "synthEnvelopeDecay":
        instrument.envelope.decay = value;
        settings.synth.envelope.decay = value;
        break;
      case "synthEnvelopeSustain":
        instrument.envelope.sustain = value;
        settings.synth.envelope.sustain = value;
        break;
      case "synthEnvelopeRelease":
        instrument.envelope.release = value;
        settings.synth.envelope.release = value;
        break;
      case "chorusWet":
        chorus.wet.value = value;
        settings.chorus.wet = value;
        break;
      case "chorusType":
        chorus.type = value;
        settings.chorus.type = value;
        break;
      case "chorusFrequency":
        chorus.frequency.value = value;
        settings.chorus.frequency = value;
        break;
      case "chorusDelayTime":
        chorus.delayTime = value;
        settings.chorus.delayTime = value;
        break;
      case "chorusDepth":
        chorus.depth = value;
        settings.chorus.depth = value;
        break;
      case "chorusSpread":
        chorus.spread = value;
        settings.chorus.spread = value;
        break;
      case "distortionWet":
        distortion.wet.value = value;
        settings.distortion.wet = value;
        break;
      case "distortionDistortion":
        distortion.distortion = value;
        settings.distortion.distortion = value;
        break;
      case "distortionOversample":
        distortion.oversample = value;
        settings.distortion.oversample = value;
        break;

      case "vibratoWet":
        vibrato.wet.value = value;
        settings.vibrato.wet = value;
        break;
      case "vibratoMaxDelay":
        vibrato.maxDelay = value;
        settings.vibrato.maxDelay = value;
        break;
      case "typeTypes":
        vibrato.type = value;
        settings.vibrato.type = value;
        break;

      case "bitCrusherWet":
        bitCrusher.wet.value = value;
        settings.bitCrusher.wet = value;
        break;
      case "bitCrusherBits":
        bitCrusher.bits = value;
        settings.bitCrusher.bits = value;
        break;
      case "pingPongDelayWet":
        pingPongDelay.wet.value = value;
        settings.pingPongDelay.wet = value;
        break;
      case "pingPongDelayDelayTime":
        pingPongDelay.delayTime.value = value;
        settings.pingPongDelay.delayTime = value;
        break;
      case "pingPongDelayMaxDelayTime":
        pingPongDelay.maxDelayTime = value;
        settings.pingPongDelay.maxDelayTime = value;
        break;
    }

    this.setState({
      bassSettings,
      melodySettings,
    });
  };

  handleMelodySoundPresetChange = (property, value) => {
    const { melodySettings } = this.state;
    const preset = melodySettings.presets[value];

    const instrument = melodySynth;
    const chorus = melodyChorus;
    const distortion = melodyDistortion;
    const pingPongDelay = melodyPingPongDelay;
    const bitCrusher = melodyBitCrusher;
    const settings = melodySettings;

    const { oscillator, envelope } = preset.synth;

    instrument.oscillator.type = oscillator.type;
    settings.synth.oscillator.type = oscillator.type;

    instrument.envelope.attack = envelope.attack;
    settings.synth.envelope.attack = envelope.attack;

    instrument.envelope.decay = envelope.decay;
    settings.synth.envelope.decay = envelope.decay;

    instrument.envelope.sustain = envelope.sustain;
    settings.synth.envelope.sustain = envelope.sustain;

    instrument.envelope.release = envelope.release;
    settings.synth.envelope.release = envelope.release;

    chorus.wet.value = preset.chorus.wet;
    settings.chorus.wet = preset.chorus.wet;

    chorus.type = preset.chorus.type;
    settings.chorus.type = preset.chorus.type;

    chorus.frequency.value = preset.chorus.frequency;
    settings.chorus.frequency = preset.chorus.frequency;

    chorus.delayTime = preset.chorus.delayTime;
    settings.chorus.delayTime = preset.chorus.delayTime;

    chorus.depth = preset.chorus.depth;
    settings.chorus.depth = preset.chorus.depth;

    chorus.spread = preset.chorus.spread;
    settings.chorus.spread = preset.chorus.spread;

    distortion.wet.value = preset.distortion.wet;
    settings.distortion.wet = preset.distortion.wet;

    distortion.distortion = preset.distortion.distortion;
    settings.distortion.distortion = preset.distortion.distortion;

    distortion.oversample = preset.distortion.oversample;
    settings.distortion.oversample = preset.distortion.oversample;

    bitCrusher.wet.value = preset.bitCrusher.wet;
    settings.bitCrusher.wet = preset.bitCrusher.wet;

    bitCrusher.bits = preset.bitCrusher.bits;
    settings.bitCrusher.bits = preset.bitCrusher.bits;

    pingPongDelay.wet.value = preset.pingPongDelay.wet;
    settings.pingPongDelay.wet = preset.pingPongDelay.wet;

    pingPongDelay.delayTime.value = preset.pingPongDelay.delayTime;
    settings.pingPongDelay.delayTime = preset.pingPongDelay.delayTime;

    pingPongDelay.maxDelayTime = preset.pingPongDelay.maxDelayTime;
    settings.pingPongDelay.maxDelayTime = preset.pingPongDelay.maxDelayTime;

    settings.presets.current = value;

    this.setState({
      melodySettings,
    });
  };

  handleMelodySequenceChange = (property, value) => {
    const { melodySettings } = this.state;
    const steps = melodySettings.sequence[value];

    melodySettings.sequence.current = value;
    melodyPart.clear();

    steps.forEach((step, i) => {
      melodyPart.add(step);
    });

    this.setState({
      melodySettings,
    });
  };

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state;

    if (property === "channelVolume") {
      melodyChannel.volume.value = value;
      melodySettings.channel.volume = value;
    } else if (property === "channelMute") {
      console.log(
        "=====BEFORE=====",
        melodySettings.channel.mute,
        melodyChannel.mute,
        melodySettings.channel.mute,
        melodyChannel
      );

      const mute = !melodySettings.channel.mute;
      melodyChannel.mute = mute;
      melodySettings.channel.mute = mute;

      console.log(
        "=====AFTER=====",
        mute,
        melodyChannel.mute,
        melodySettings.channel.mute,
        melodyChannel
      );
    }

    this.setState({
      melodySettings,
    });
  };

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state;

    if (property === "channelVolume") {
      samplerChannel.volume.value = value;
      drumsSettings.channel.volume = value;
    } else if (property === "channelMute") {
      console.log(
        "=====BEFORE=====",
        drumsSettings.channel.mute,
        samplerChannel.mute,
        drumsSettings.channel.mute,
        samplerChannel
      );

      const mute = !drumsSettings.channel.mute;
      samplerChannel.mute = mute;
      drumsSettings.channel.mute = mute;

      console.log(
        "=====AFTER=====",
        mute,
        samplerChannel.mute,
        drumsSettings.channel.mute,
        samplerChannel
      );
    }

    this.setState({
      drumsSettings,
    });
  };

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state;

    if (property === "synthType") {
      bassSynth.oscillator.type = value;
      bassSettings.synth.oscillator.type = value;
    } else if (property === "bassPingPongDelayDelayTime") {
      bassPingPongDelay.delayTime.value = value;
      bassSettings.pingPongDelay.delayTime = value;
    } else if (property === "bassPingPongDelayMaxDelayTime") {
      bassPingPongDelay.maxDelayTime = value;
      bassSettings.pingPongDelay.maxDelayTime = value;
    } else if (property === "channelVolume") {
      bassChannel.volume.value = value;
      bassSettings.channel.volume = value;
    } else if (property === "channelMute") {
      console.log(
        "=====BEFORE=====",
        bassSettings.channel.mute,
        bassChannel.mute,
        bassSettings.channel.mute,
        bassChannel
      );

      const mute = !bassSettings.channel.mute;
      bassChannel.mute = mute;
      bassSettings.channel.mute = mute;

      console.log(
        "=====AFTER=====",
        mute,
        bassChannel.mute,
        bassSettings.channel.mute,
        bassChannel
      );
    }

    this.setState({
      bassSettings,
    });
  };

  handleToggleUIShow = () => {
    const { isUIShown } = this.state;

    this.setState({
      isUIShown: !isUIShown,
    });
  };

  renderStartButton = () => {
    return <SC_Button text="" handleClick={this.handleStart} />;
  };

  renderShowHideButton = () => {
    return (
      <div className="toggleUIButton" onClick={this.handleToggleUIShow}></div>
    );
  };

  renderUI = () => {
    const {
      bpm,
      melodyChangeMeasureSelect,
      melodyChangeMeasure,
      melodyChangeRandom,
      melodyChange,
      bassSettings,
      melodySettings,
      drumsSettings,
      pOpened,
      vOpened,
      dOpened,
      bOpened,
    } = this.state;

    const melodyChangeButtonText = melodyChange ? "On" : "Off";

    return (
      <div className="instrumentUI">
        <Modal add="left" appname="Nailing">
          <div className="b"></div>
          <div className="drumsBox">
            <Channel
              settings={drumsSettings}
              handleValueChange={this.handleDrumsValueChange}
            />
          </div>
          <div>
            <h3>Hammer it!</h3>
            <div className="drumsBntSet">
              <SC_Button
                text="hammer"
                handleClick={() => {
                  sampler.triggerAttackRelease("A1", "1n");
                }}
              />
              <SC_Button
                text="squeezer"
                handleClick={() => {
                  sampler.triggerAttackRelease("A2", "1n");
                }}
              />
              <SC_Button
                text="sledge"
                handleClick={() => {
                  sampler.triggerAttackRelease("C1", "1n");
                }}
              />
              <SC_Button
                text="ball-peen"
                handleClick={() => {
                  sampler.triggerAttackRelease("A4", "1m");
                }}
              />
            </div>
          </div>
          <PingPongDelayEffect
            title="PingPong Delay"
            instrumentName="drums"
            settings={drumsSettings}
            handleValueChange={this.handleValueChange}
            handleToggle={this.handleToggle}
            pOpened={pOpened}
          />
          <VibratoEffect
            title="Vibrato"
            instrumentName="drums"
            settings={drumsSettings}
            handleValueChange={this.handleValueChange}
            handleToggle={this.handleToggle}
            vOpened={vOpened}
          />
        </Modal>

        <Modal add="middle" appname="Mixing">
          <div className="a"></div>
          <PPDView
            instrumentName="bass"
            settings={bassSettings}
            handleValueChange={this.handleValueChange}
          />
          <SC_Slider
            name="bpm"
            min={0}
            max={300}
            step={1}
            value={bpm}
            property="bpm"
            handleChange={(property, value) => {
              this.handleTransportChange(property, value);
            }}
          />
          <div className="PresetsWrapper">
            <SC_ToggleButtonSet
              name="Nailing tempo"
              options={["tapping", "grind"]}
              value={melodySettings.sequence.current}
              property="melodySequence"
              handleChange={this.handleMelodySequenceChange}
            />
            <SC_ToggleButtonSet
              name="Wailing tempo"
              options={["default", "preset1", "preset2"]}
              value={melodySettings.presets.current}
              property="melodySoundPreset"
              handleChange={this.handleMelodySoundPresetChange}
            />
          </div>
          <div className="SurfaceWrapper">
            <div className="LeftDecor">
              <p className="Decor">1.0</p>
              <p className="Decor">0.0</p>
            </div>

            <Surface
              minX="0"
              maxX="1"
              stepX="0.01"
              valueX={bassSettings.pingPongDelay.delayTime}
              propertyX="bassPingPongDelayDelayTime"
              minY="0"
              maxY="1"
              stepY="0.01"
              valueY={bassSettings.pingPongDelay.maxDelayTime}
              propertyY="bassPingPongDelayMaxDelayTime"
              handleValueChange={this.handleBassValueChange}
            />
            <p className="Decor">1.0</p>
          </div>
          <div className="SelectWrapper">
            <Select
              name="Change melody on: M"
              options={[2, 4, 8, 16, 32]}
              isOpened={melodyChangeMeasureSelect}
              value={melodyChangeMeasure}
              property=""
              handleMelodyChangeMeasureSelectOpen={
                this.handleMelodyChangeMeasureSelectOpen
              }
              handleChange={this.handleMelodyChangeMeasure}
            />
            <div className="row">
              <SC_ToggleButton
                text={melodyChangeButtonText}
                isOn={melodyChange}
                handleClick={this.handleMelodyChange}
              />
              <SC_ToggleButton
                text="Random"
                isOn={melodyChangeRandom}
                handleClick={this.handleMelodyChangeRandom}
              />
            </div>
          </div>
          <ToneSynth
            instrumentName="melody"
            settings={melodySettings}
            handleValueChange={this.handleValueChange}
            isWave
          />
        </Modal>
        <Modal appname="WELDING" add="right">
          <div className="r"></div>
          <Channel
            settings={bassSettings}
            handleValueChange={this.handleBassValueChange}
          />
          <ToneSynth
            instrumentName="bass"
            settings={bassSettings}
            handleValueChange={this.handleValueChange}
          />
          <DistortionEffect
            title="Distortion"
            instrumentName="bass"
            settings={bassSettings}
            handleValueChange={this.handleValueChange}
            handleSecondToggle={this.handleSecondToggle}
            dOpened={dOpened}
          />
          <BitCrusherEffect
            title="BitCrusher"
            instrumentName="bass"
            settings={bassSettings}
            handleValueChange={this.handleValueChange}
            handleSecondToggle={this.handleSecondToggle}
            bOpened={bOpened}
          />
        </Modal>
      </div>
    );
  };

  render() {
    const { isStarted, isUIShown } = this.state;

    return (
      <div className="Container">
        <div className="HeaderShadow">
          <div className="HeaderWrapper">
            <div className="h"></div>
            <div className="MainText">
              <h1>Metallique</h1>
              <p className="Note">
                МЕХАНИЗМ ПРОИЗВЕДЁН НА ЗАВОДЕ ИМ. МЕДВЕДЕВА И ПРЕДНАЗНАЧЕН
                ДЛЯ ГЕНЕРАЦИИ ЗВУКОВ ФАБРИКи. бЕРЕЧЬ ОТ ДЕТЕЙ И ОГНЯ.
                НЕ УПОТРЕБЛЯТЬ ВНУТРЬ. ИСПОЛЬЗОВАТЬ, СТРОГО СЛЕДУЯ ИНСТРУКЦИИ.
              </p>
            </div>
            <div className="DecText">
              <h3>
                МЕХАНИЗМ ВОСПРОИЗВЕДЕНИЯ ЗВУКА&ensp;&gt;&gt;&ensp;V
                2.0&ensp;&gt;&gt;
              </h3>
              <h3>Updated synth</h3>
              <h3>ADC</h3>
            </div>
          </div>
          {isStarted ? this.renderShowHideButton() : this.renderStartButton()}
        </div>
        {isUIShown ? this.renderUI() : ""}
        <svg
          width="1392"
          height="275"
          viewBox="0 0 1392 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="maskHeader">
              <path
                d="M2 0H46.2558H926.269C926.741 0 927.198 0.166988 927.559 0.471417L958.441 26.5286C958.802 26.833 959.259 27 959.731 27H1054.27C1054.74 27 1055.2 26.833 1055.56 26.5286L1086.44 0.471416C1086.8 0.166988 1087.26 0 1087.73 0H1258.84C1259.27 0 1259.69 0.137443 1260.03 0.392106L1295.47 26.6079C1295.81 26.8626 1296.23 27 1296.66 27H1389C1390.1 27 1391 27.8954 1391 29V74.269C1391 74.7411 1390.83 75.1979 1390.53 75.5587L1364.47 106.441C1364.17 106.802 1364 107.259 1364 107.731V113.131C1364 115.57 1358.94 116.24 1358.09 113.954C1340.23 66.0878 1294.09 32 1240 32C1170.41 32 1114 88.4121 1114 158C1114 207.35 1142.37 250.073 1183.69 270.749C1185.66 271.734 1184.98 275 1182.78 275H952.645C952.226 275 951.817 274.868 951.477 274.623L927.523 257.377C927.183 257.132 926.774 257 926.355 257H892H788L756 230H732H700H692H660H636L604 257H500H232H128L96 230H32H0V104V32.5V2C0 0.89543 0.895431 0 2 0ZM1358.29 201.501C1359.11 199.271 1364 199.912 1364 202.288C1364 202.748 1364.16 203.193 1364.46 203.544L1390.55 234.463C1390.84 234.811 1391.01 235.248 1391.02 235.703L1391.95 272.95C1391.98 274.074 1391.07 275 1389.95 275H1297.22C1295.02 275 1294.34 271.735 1296.31 270.75C1324.83 256.479 1347.18 231.706 1358.29 201.501Z"
                fill="#D9D9D9"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
}
