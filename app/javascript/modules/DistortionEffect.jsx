import React, { Component } from "react";

import SC_Slider from "../components/SC_Slider.jsx";
import SC_ToggleButtonSet from "../components/SC_ToggleButtonSet.jsx";

export default class DistortionEffect extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props;
    handleValueChange(instrumentName, property, value);
  };

  render() {
    const { title, instrumentName, settings, handleSecondToggle, dOpened } = this.props;
    const { wet, distortion, oversample } = settings.distortion;
    const oversampleTypes = ["none", "2x", "4x"];

    return (
      <div className="DistortionEffect">
        <h2 className="clickable" onClick={handleSecondToggle}>{title}</h2>
        <h2 className={`glyph ${dOpened ? 'o' : 'c'}`}>↓</h2>
        <div className={`distortionSliders ${dOpened ? 'opened' : 'closed'}`}>
          <SC_Slider
            name="Wet"
            property="distortionWet"
            min={0}
            max={1}
            step={0.01}
            value={wet}
            handleChange={this.handleValueChange}
          />
          <SC_ToggleButtonSet
            name="Oversample"
            property="distortionOversample"
            value={oversample}
            options={oversampleTypes}
            handleChange={this.handleValueChange}
          />
        </div>
      </div>
    );
  }
}
