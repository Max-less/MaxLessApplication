import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowRightIcon = () => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
  >
    <G opacity={0.5}>
      <Path
        d="M15 30L25 20L15 10"
        stroke="#62281B"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowRightIcon;