import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const CommunityIcon = () => (
  <Svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
  >
    <G opacity={0.4}>
      <Path
        d="M36.8333 42.25C36.8333 38.6601 31.9831 35.75 26 35.75C20.0169 35.75 15.1667 38.6601 15.1667 42.25M45.5 35.7508C45.5 33.0854 42.8261 30.7947 39 29.7917M6.5 35.7508C6.5 33.0854 9.17387 30.7947 13 29.7917M39 21.0949C40.3298 19.9047 41.1667 18.1751 41.1667 16.25C41.1667 12.6601 38.2565 9.75 34.6667 9.75C33.0019 9.75 31.4833 10.3758 30.3333 11.4051M13 21.0949C11.6702 19.9047 10.8333 18.1751 10.8333 16.25C10.8333 12.6601 13.7435 9.75 17.3333 9.75C18.9981 9.75 20.5167 10.3758 21.6667 11.4051M26 29.25C26 29.25 19.5 26.3399 19.5 22.75C19.5 19.1601 26 16.25 26 16.25C26 16.25 32.5 19.1601 32.5 22.75C32.5 26.3399 26 29.25 26 29.25Z"
        stroke="url(#paint0_linear_195_535)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_195_535"
        x1={26}
        y1={-5.28125}
        x2={26}
        y2={42.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CommunityIcon;