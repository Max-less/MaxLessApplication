import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const ActiveBackToMainIcon = () => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.9581 11.1565L26.1859 2.25004C22.5575 -0.750011 17.4425 -0.750016 13.8141 2.25004L3.04193 11.1565C1.10118 12.7612 0 15.1941 0 17.7326V31.6218C0 36.132 3.4683 40 8 40H12C14.2091 40 16 38.2091 16 36V29.4957C16 26.9607 17.9043 25.1174 20 25.1174C22.0957 25.1174 24 26.9607 24 29.4957V36C24 38.2091 25.7909 40 28 40H32C36.5317 40 40 36.132 40 31.6218V17.7326C40 15.1941 38.8988 12.7612 36.9581 11.1565Z"
      fill="url(#paint0_linear_195_533)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_195_533"
        x1={20}
        y1={-18.5}
        x2={20}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ActiveBackToMainIcon;