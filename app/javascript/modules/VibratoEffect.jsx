import React, { Component } from "react";

import SC_Slider from "../components/SC_Slider.jsx";
import SC_ToggleButtonSet from "../components/SC_ToggleButtonSet.jsx";

export default class VibratoEffect extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props;
    handleValueChange(instrumentName, property, value);
  };

  render() {
    const { title, instrumentName, settings, handleToggle, vOpened } = this.props;
    const { wet, maxDelay, type } = settings.vibrato;
    const typeTypes = ["sine", "square", "sawtooth", "triangle"];

    return (
      <div className="VibratoEffect">
        <h2 className="clickable" onClick={handleToggle}>{title}</h2>
        <h2 className={`glyph ${vOpened ? 'o' : 'c'}`}>↓</h2>
        <div className={`vibratoSliders ${vOpened ? 'opened' : 'closed'}`}>
          <SC_Slider
            name="Wet"
            property="vibratoWet"
            min={0}
            max={1}
            step={0.01}
            value={wet}
            handleChange={this.handleValueChange}
          />

          <SC_Slider
            name="Max Delay"
            property="vibratoMaxDelay"
            min={0}
            max={1}
            step={0.01}
            value={maxDelay}
            handleChange={this.handleValueChange}
          />

          <SC_ToggleButtonSet
            name="Type"
            property="typeTypes"
            value={type}
            options={typeTypes}
            handleChange={this.handleValueChange}
          />
        </div>
      </div>
    );
  }
}
