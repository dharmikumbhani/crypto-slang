import React, { useContext} from "react";
import {ThemeContext, SoundOnContext} from '../../context/ThemeContext';

function SoundOnIcon(props) {
  // const {soundOn, setSoundOn} = useContext(SoundOnContext);
  const {colorMode, setColorMode} = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || '22'}
      height={props.size || '22'}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={colorMode === 'light' ? "#000" : "#fff"}
        fillRule="evenodd"
        d="M6.773 12h-.106A2.667 2.667 0 004 14.667v2.666A2.667 2.667 0 006.667 20h.106a2.665 2.665 0 012.026.93l4.856 5.667c.805.939 2.345.37 2.345-.868V6.271c0-1.238-1.54-1.807-2.347-.867L8.8 11.068A2.666 2.666 0 016.773 12zm18.075-6.3a1.333 1.333 0 10-1.836 1.933c4.873 4.63 4.873 12.104 0 16.734a1.332 1.332 0 101.836 1.933c5.98-5.68 5.98-14.92 0-20.6zm-3.93 3.733a1.334 1.334 0 00-1.837 1.934c2.703 2.566 2.703 6.7 0 9.266a1.334 1.334 0 001.838 1.934c3.809-3.619 3.809-9.515 0-13.134z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SoundOnIcon;