import React, { PureComponent } from "react";
import * as Tone from "tone";
import WelcomeScreen from "../views/WelcomeScreen";
import SynthView from "../views/SynthView";

import * as drumsSettings from "../tunes/drums.js";
let samplerPingPongDelay;
let samplerChannel;


export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      webAudioStarted: false,
      drumsSettings,
    };
  }

  startWebAudio = async () => {
    await Tone.start();

    // const { drumsSettings } = this.state;
    // const sampler = new Tone.Sampler({
    //   urls: {
    //     A1: "bellone.mp3",
    //     A2: "belltwo.mp3",
    //     A3: "bellthree.mp3",
    //   },
    //   baseUrl: "http://localhost:3000/samples/",
    // });

    // samplerChannel = new Tone.Channel(drumsSettings.channel);

    // samplerPingPongDelay = new Tone.PingPongDelay(
    //   drumsSettings.pingPongDelay
    // ).toDestination();

    // sampler.chain(samplerChannel, samplerPingPongDelay);

    // const drumsPart = new Tone.Part((time, note) => {
    //   sampler.triggerAttackRelease(
    //     note.noteName,
    //     note.duration,
    //     time,
    //     note.velocity
    //   );
    // }, drumsSettings.sequence.steps).start(0);

    // drumsPart.loopEnd = drumsSettings.sequence.duration;
    // drumsPart.loop = true;

    Tone.Transport.start();

    this.setState({
      webAudioStarted: true,
    });
  };

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />;
  };

  renderSynthView = () => {
    return <SynthView />;
  };

  render() {
    const { webAudioStarted } = this.state;
    return (
      <div className="SynthContainer" >
        {webAudioStarted === true
          ? this.renderSynthView()
          : this.renderWelcomeScreen()}
      </div>
    );
  }
}
