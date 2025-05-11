import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const CreateNewSocietyIcon = () => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
  >
    <Circle opacity={0.15} cx={30} cy={30} r={30} fill="#62281B" />
    <Path
      opacity={0.75}
      d="M30 39V21M39 30H21"
      stroke="#62281B"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);
export default CreateNewSocietyIcon;