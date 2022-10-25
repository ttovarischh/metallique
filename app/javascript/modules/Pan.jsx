import React, { Component } from "react";
import SC_Knob from "../components/SC_Knob.jsx";

export default class Pan extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings, handleValueChange } = this.props;

    return (
      <div className="panandline">
        <div className="panwrapper">
          <div className="Pan">
            <SC_Knob
              name=""
              property="channelPan"
              min={-1}
              max={1}
              value={settings.channel.pan}
              current={settings.channel.pan}
              handleChange={handleValueChange}
            />
          </div>
          <div className="halfcircle"></div>
        </div>
        <div className="line">
          <div className="panname">pan</div>
        </div>
      </div>
    );
  }
}
