import React, { PureComponent } from "react";
import Uppercontrol from "./Uppercontrol.jsx";

export default function Modal(props) {
  const { modalid, mbid, modaltype, appname, add } = props;
  return (
    <div className={`Modal ${add}`} id={`${modalid}`}>
      <Uppercontrol appname={`${appname}`} />

      <div className="modalbody" id={`${mbid}`}>
        {modaltype === "notemodal" && (
          <p>
            This synthesizer is my reflection on our current reality. Over the
            past six months, most of my friends have moved to other countries.
            We can only communicate via zoom or telegram. That’s sad indeed.
            <br></br><br></br>
            However, the difference in our audio backgrounds creates a kind of
            music. I can hear birds from one friend and sea from the other. This
            synthesizer consists of one drum sequence, 9 samplers and 3 synthes.
            It uses all those special and new (at least for me) sounds of
            Georgia, Armenia and Israel.
            <br></br><br></br>
            Join me in my digital trip to friends
            <br></br><br></br>
            <br></br><br></br>
          </p>
        )}

        {modaltype === "todomodal" && (
          <div className="modalbody" id="notes">
            <p>
              Your instructions:
              <br /> 1/ Turn on channels by clicking the big round buttons{" "}
              <br />
              2/ Change the pan side usign top knobs <br />
              3/ Change params of the synthes on the right
              <br />
              4/ Have fun
            </p>
          </div>
        )}

        {props.children}
      </div>
    </div>
  );
}
