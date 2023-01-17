import React, { Component } from "react";

import SC_Slider from "../components/SC_Slider.jsx";

export default class PPDView extends Component {
  constructor(props) {
    super(props);
  }

  handleValueChange = (property, value) => {
    const { instrumentName, handleValueChange } = this.props;
    handleValueChange(instrumentName, property, value);
  };

  render() {
    const { title, instrumentName, settings } = this.props;
    const { wet, delayTime, maxDelayTime } = settings.pingPongDelay;

    return (
      <div className="PPDView" id="PDView">
          <SC_Slider
            name=""
            property="pingPongDelayDelayTime"
            min={0}
            max={1}
            step={0.01}
            value={delayTime}
            handleChange={this.handleValueChange}
          />

          <SC_Slider
            name=""
            property="pingPongDelayMaxDelayTime"
            min={0}
            max={1}
            step={0.01}
            value={maxDelayTime}
            handleChange={this.handleValueChange}
          />
      </div>
    );
  }
}
