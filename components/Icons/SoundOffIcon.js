import React, {useContext} from "react";
import {ThemeContext} from '../../context/ThemeContext';

function SoundOffIcon(props) {
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
        d="M17.333 6.27c0-2.475-3.08-3.614-4.692-1.734L7.787 10.2a1.332 1.332 0 01-1.014.467h-.106a4 4 0 00-4 4v2.666a4 4 0 004 4h.106a1.333 1.333 0 011.014.467l.949-.816-.95.815 4.855 5.666c1.612 1.88 4.692.74 4.692-1.736V6.271zm4.391 6.12a1.333 1.333 0 011.885 0l1.724 1.725 1.724-1.724a1.332 1.332 0 111.886 1.885L27.219 16l1.724 1.724a1.333 1.333 0 01-1.886 1.885l-1.724-1.724-1.724 1.724a1.334 1.334 0 01-1.885-1.885L23.448 16l-1.724-1.724a1.334 1.334 0 010-1.885z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SoundOffIcon;