import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const AddPictureOnCreatingHobby = () => (
  <Svg
    width={90}
    height={90}
    viewBox="0 0 90 90"
    fill="none"
  >
    <Rect opacity={0.1} width={90} height={90} rx={20} fill="#62281B" />
    <Path
      d="M31.375 61.375H57.625C59.6961 61.375 61.375 59.6961 61.375 57.625V31.375C61.375 29.3039 59.6961 27.625 57.625 27.625H31.375C29.3039 27.625 27.625 29.3039 27.625 31.375V57.625C27.625 59.6961 29.3039 61.375 31.375 61.375ZM31.375 61.375L52 40.75L61.375 50.125M40.75 37.9375C40.75 39.4908 39.4908 40.75 37.9375 40.75C36.3842 40.75 35.125 39.4908 35.125 37.9375C35.125 36.3842 36.3842 35.125 37.9375 35.125C39.4908 35.125 40.75 36.3842 40.75 37.9375Z"
      stroke="#62281B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AddPictureOnCreatingHobby;