import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const ArrowToBack = () => (
  <Svg
    width={31}
    height={31}
    viewBox="0 0 31 31"
    fill="none"
  >
    <Path
      d="M28.0416 15.5H2.95831M2.95831 15.5L15.5 28.0417M2.95831 15.5L15.5 2.95837"
      stroke="url(#paint0_linear_2008_308)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2008_308"
        x1={15.5}
        y1={-8.64267}
        x2={15.5}
        y2={28.0417}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ArrowToBack;