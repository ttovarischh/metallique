import React, { Component } from "react";

import SC_ToggleButtonSet from "../components/SC_ToggleButtonSet.jsx";
import SC_ToggleButton from "../components/SC_ToggleButton.jsx";
import SC_Slider from "../components/SC_Slider.jsx";

export default class ToneSynth extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props;
    handleValueChange(instrumentName, property, value);
  };

  render() {
    const { title, settings, isWave } = this.props;
    const options = ["sine", "triangle", "pwm", "pulse"];

    return (
      <div className="ToneSynth">
        {isWave ? (
          <div className="Wave">
            <SC_ToggleButtonSet
              name="Wave Type"
              options={options}
              value={settings.synth.oscillator.type}
              property="synthType"
              handleChange={this.handleValueChange}
            />
          </div>
        ) : (
          // <SC_ToggleButton
          //   text="Envelope ↓"
          //   isOn={settings.synthUI.envelopeShow}
          //   handleClick={() =>
          //     this.handleValueChange(
          //       "synthShowEnvelope",
          //       !settings.synthUI.envelopeShow
          //     )
          //   }
          // />
          <div className="EnvSettings">
          <SC_Slider
            name="Envelope Attack"
            min={0}
            max={10}
            step={0.01}
            value={settings.synth.envelope.attack}
            property="synthEnvelopeAttack"
            handleChange={this.handleValueChange}
          />
  
          <SC_Slider
            name="Envelope Decay"
            min={0}
            max={10}
            step={0.01}
            value={settings.synth.envelope.decay}
            property="synthEnvelopeDecay"
            handleChange={this.handleValueChange}
          />
  
          <SC_Slider
            name="Envelope Sustain"
            min={0}
            max={1}
            step={0.01}
            value={settings.synth.envelope.sustain}
            property="synthEnvelopeSustain"
            handleChange={this.handleValueChange}
          />
  
          <SC_Slider
            name="Envelope Release"
            min={0}
            max={10}
            step={0.01}
            value={settings.synth.envelope.release}
            property="synthEnvelopeRelease"
            handleChange={this.handleValueChange}
          />
        </div>
        )}
      </div>
    );
  }
}
