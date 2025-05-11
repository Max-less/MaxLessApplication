import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const NewTextNoteIcon = () => (
  <Svg
    width={120}
    height={120}
    viewBox="0 0 120 120"
    fill="none"
  >
    <Rect opacity={0.1} width={120} height={120} rx={20} fill="#62281B" />
    <Path
      d="M62.2084 35.125H42.5417C41.4372 35.125 40.5417 36.0204 40.5417 37.125V81.875C40.5417 82.9796 41.4372 83.875 42.5418 83.875H76.4584C77.563 83.875 78.4584 82.9796 78.4584 81.875V51.375M62.2084 35.125L78.4584 51.375M62.2084 35.125V50.375C62.2084 50.9273 62.6561 51.375 63.2084 51.375H78.4584M51.3751 62.2083H67.6251M51.3751 73.0417H67.6251"
      stroke="#62281B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NewTextNoteIcon;