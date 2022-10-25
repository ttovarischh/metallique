import React, { Component } from "react";
import SC_Slider from "../components/SC_Slider.jsx";

export default class ToneSynth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings, handleValueChange } = this.props;

    return (
      <div className="Envelope">
        <div className="sliderwrapper">
          <SC_Slider
            name="Synth Envelope Decay"
            min={0}
            max={1}
            step={0.01}
            value={settings.synth.envelope.decay}
            property="synthEnvelopeDecay"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Synth Envelope Release"
            min={0}
            max={1}
            step={0.01}
            value={settings.synth.envelope.release}
            property="synthEnvelopeRelease"
            handleChange={handleValueChange}
          />
        </div>
      </div>
    );
  }
}
