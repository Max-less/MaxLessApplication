import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BackToMainIcon = () => (
  <Svg
    width={37}
    height={41}
    viewBox="0 0 37 41"
    fill="none"
  >
    <Path
      d="M13.125 38.4166V20.4999H23.875V38.4166M2.375 15.1249L18.5 2.58325L34.625 15.1249V34.8333C34.625 35.7836 34.2475 36.695 33.5755 37.3671C32.9035 38.0391 31.992 38.4166 31.0417 38.4166H5.95833C5.00797 38.4166 4.09654 38.0391 3.42453 37.3671C2.75253 36.695 2.375 35.7836 2.375 34.8333V15.1249Z"
      stroke="url(#paint0_linear_2020_174)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2020_174"
        x1={18.5}
        y1={-13.9897}
        x2={18.5}
        y2={38.4166}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BackToMainIcon;
