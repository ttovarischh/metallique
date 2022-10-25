import React, { Component } from "react";
import SC_Knob from "../components/SC_Knob.jsx";

export default class Reverb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { settings, handleValueChange } = this.props;

    return (
        <div className="panreverbwrapper">
          <div className="Reverb">
            <SC_Knob
              name=""
              property="reverbWet"
              min={0}
              max={1}
              value={settings.reverb.wet}
              current={settings.reverb.wet}
              handleChange={handleValueChange}
            />
          </div>
        </div>
    );
  }
}
