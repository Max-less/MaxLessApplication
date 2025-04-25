import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const AddNewPictureIcon = () => (
  <Svg
    width={200}
    height={200}
    viewBox="0 0 200 200"
    fill="none"
  >
    <Circle cx={100} cy={100} r={97.5} stroke="#62281B" strokeWidth={5} />
    <Path
      d="M76.6667 130H123.333C127.015 130 130 127.015 130 123.333V76.6667C130 72.9848 127.015 70 123.333 70H76.6667C72.9848 70 70 72.9848 70 76.6667V123.333C70 127.015 72.9848 130 76.6667 130ZM76.6667 130L113.333 93.3333L130 110M93.3333 88.3333C93.3333 91.0948 91.0948 93.3333 88.3333 93.3333C85.5719 93.3333 83.3333 91.0948 83.3333 88.3333C83.3333 85.5719 85.5719 83.3333 88.3333 83.3333C91.0948 83.3333 93.3333 85.5719 93.3333 88.3333Z"
      stroke="#62281B"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AddNewPictureIcon;