import * as React from "react";
import Svg, { G, Rect, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SwitchOnIcon = () => (
  <Svg
    width={51}
    height={31}
    viewBox="0 0 51 31"
    fill="none"
  >
    <G clipPath="url(#clip0_107_622)">
      <Rect width={51} height={31} rx={15.5} fill="#F57F40" />
      <G filter="url(#filter0_ddd_107_622)">
        <Rect x={22} y={2} width={27} height={27} rx={13.5} fill="white" />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_107_622">
        <Rect width={51} height={31} rx={15.5} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SwitchOnIcon;