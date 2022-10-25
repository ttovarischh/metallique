import React, { Component } from 'react'
import SC_Slider from '../components/SC_Slider.jsx'


export default class Channel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="sliderwrapper">
        <SC_Slider
          name="Channel Volume"
          min={-60}
          max={10}
          step={1}
          value={settings.channel.volume}
          property="channelVolume"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
