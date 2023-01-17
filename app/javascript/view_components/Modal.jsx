import React, { PureComponent } from "react";

export default function Modal(props) {
  const { modalid, appname, add } = props;
  return (
    <div className="ModalShadow">
      <div className={`Modal ${add}`} id={`${modalid}`}>
        <h1>{appname}</h1>
        <div className="SoundControllWrapper">{props.children}</div>
      </div>

      <svg
        width="456"
        height="609"
        viewBox="0 0 456 609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="maskRect1">
            <path
              d="M0 2C0 0.895431 0.895431 0 2 0H32H95.269C95.7411 0 96.1979 0.166988 96.5587 0.471416L127.441 26.5286C127.802 26.833 128.259 27 128.731 27H224H232H327.269C327.741 27 328.198 26.833 328.559 26.5286L359.441 0.471417C359.802 0.166988 360.259 0 360.731 0H424H454C455.105 0 456 0.895431 456 2V27V591V607C456 608.105 455.105 609 454 609H2C0.895431 609 0 608.105 0 607V590.5V27V2Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </defs>
      </svg>

      <svg width="448" height="609" viewBox="0 0 448 609" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="maskRect2">
            <path d="M188 0H164.731C164.259 0 163.802 0.166988 163.441 0.471417L132.559 26.5286C132.198 26.833 131.741 27 131.269 27H27.9999C27.9999 27 27.9998 27 27.9998 27.0001V27.0001C27.9998 27.0001 27.9998 27.0001 27.9998 27.0001H2C0.895429 27.0001 0 27.8956 0 29.0001V607C0 608.105 0.895431 609 2 609H446C447.105 609 448 608.105 448 607V29.0001C448 27.8956 447.105 27.0001 446 27.0001L420 27H316.731C316.259 27 315.802 26.833 315.441 26.5286L284.559 0.471416C284.198 0.166988 283.741 0 283.269 0H260H228H220H188Z" fill="#D9D9D9"/>
          </clipPath>
        </defs>
      </svg>

      <svg width="456" height="580" viewBox="0 0 456 580" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="maskRect3">
              <path d="M0 16H5L69 16L87.963 0H456V580H0V16Z" fill="#D9D9D9"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
