import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const NewHobbyIcon = () => (
  <Svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
  >
    <Path
      d="M40 73.3334C58.4095 73.3334 73.3334 58.4096 73.3334 40.0001C73.3334 21.5906 58.4095 6.66675 40 6.66675C21.5905 6.66675 6.66669 21.5906 6.66669 40.0001C6.66669 58.4096 21.5905 73.3334 40 73.3334Z"
      fill="url(#paint0_linear_104_444)"
      fillOpacity={0.75}
    />
    <Path
      opacity={0.75}
      d="M40 53V27M53 40H27"
      stroke="url(#paint1_linear_104_444)"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_104_444"
        x1={40}
        y1={-7}
        x2={40}
        y2={56.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E9A991" />
        <Stop offset={1} stopColor="#F57F40" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_104_444"
        x1={40}
        y1={17.5}
        x2={40}
        y2={64.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default NewHobbyIcon;
