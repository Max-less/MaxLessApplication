import * as React from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
const OrangeCircleIcon = () => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
  >
    <Circle cx={30} cy={30} r={30} fill="url(#paint0_radial_243_483)" />
    <Defs>
      <RadialGradient
        id="paint0_radial_243_483"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.9231 6) rotate(54.6332) scale(34.6867 36.0488)"
      >
        <Stop stopColor="#FF926B" />
        <Stop offset={1} stopColor="#F57F40" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default OrangeCircleIcon;
