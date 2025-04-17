import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const ThreeStripedIcon = () => (
  <Svg
    width={37}
    height={31}
    viewBox="0 0 37 31"
    fill="none"
  >
    <Path
      d="M2.375 15.5H34.625M2.375 2.25H34.625M2.375 28.75H34.625"
      stroke="url(#paint0_linear_2020_48)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2020_48"
        x1={18.5}
        y1={-17.7373}
        x2={18.5}
        y2={28.5254}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ThreeStripedIcon;