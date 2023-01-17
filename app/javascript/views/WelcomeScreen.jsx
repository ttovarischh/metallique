import PropTypes from "prop-types";
import React, { PureComponent } from "react";

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleStartWebAudio } = this.props;

    return (
      <div className="WelcomeScreen" id="WS">
        <div className="Bg" id="a"></div>
        <div className="Bg" id="b"></div>
        <div className="Bg" id="c"></div>
        <div className="Bg" id="d"></div>
        <div className="Bg" id="e"></div>
        <div className="WelcomeShadow">
          <div className="WelcomeWrapper" onClick={handleStartWebAudio}>
            <div className="MainText">
              <h1>Metallique</h1>
            </div>
            <div className="DecText">
              <h3>используйте оборудование с осторожностью*</h3>
            </div>
          </div>
        </div>
        <svg width="1392" height="275" viewBox="0 0 1392 275" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="maskWelcome">
              <path d="M0 0H46.2558H927L959 27H1055L1087 0H1259.5L1296 27H1391V75L1364 107V203L1391 235L1392 275H952L927 257H0V104V32.5V0Z" fill="#D9D9D9"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired,
};
