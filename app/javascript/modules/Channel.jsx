import React, { Component } from "react";

import SC_ToggleButton from "../components/SC_ToggleButton.jsx";
import SC_Slider from "../components/SC_Slider.jsx";
import SC_Knob from "../components/SC_Knob.jsx";

export default class ToneSynth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings, handleValueChange } = this.props;

    return (
      // className={`Modal ${add}`}
      <div className={`Channel ${settings.channel.mute ? 'silent' : 'loud'}`}>
        <SC_ToggleButton
          text=""
          isOn={settings.channel.mute}
          handleClick={() =>
            handleValueChange("channelMute", !settings.channel.mute)
          }
        />
        <p className="Decor">min</p>
        <SC_Slider
          name="Channel Volume"
          min={-60}
          max={10}
          step={1}
          value={settings.channel.volume}
          property="channelVolume"
          handleChange={handleValueChange}
        />
        <p className="Decor">max</p>
      </div>
    );
  }
}
