import React, { Component } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="ToneSynth">
        <SC_ToggleButtonSet
          name="Synth Type"
          options={options}
          value={settings.synth.oscillator.type}
          property="synthType"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
