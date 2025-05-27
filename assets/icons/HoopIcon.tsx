import * as React from "react";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";
const HoopIcon = () => (
  <Svg
    width={120}
    height={120}
    viewBox="0 0 120 120"
    fill="none"
  >
    <Circle
      cx={60}
      cy={60}
      r={58.5}
      fill="url(#paint0_radial_278_603)"
      stroke="url(#paint1_linear_278_603)"
      strokeWidth={3}
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_278_603"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(25.8462 12) rotate(54.6332) scale(69.3733 72.0975)"
      >
        <Stop stopColor="#FF926B" />
        <Stop offset={1} stopColor="#F57F40" />
      </RadialGradient>
      <LinearGradient
        id="paint1_linear_278_603"
        x1={60}
        y1={-79.5001}
        x2={60}
        y2={120}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HoopIcon;