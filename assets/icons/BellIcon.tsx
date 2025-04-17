import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const BellIcon = () => (
  <Svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
  >
    <Path
      d="M24.5996 37.625C24.2846 38.1681 23.8325 38.6188 23.2885 38.9321C22.7445 39.2454 22.1278 39.4104 21.5 39.4104C20.8722 39.4104 20.2555 39.2454 19.7115 38.9321C19.1675 38.6188 18.7154 38.1681 18.4004 37.625M32.25 14.3334C32.25 11.4823 31.1174 8.74799 29.1014 6.73198C27.0854 4.71596 24.3511 3.58337 21.5 3.58337C18.6489 3.58337 15.9146 4.71596 13.8986 6.73198C11.8826 8.74799 10.75 11.4823 10.75 14.3334C10.75 26.875 5.375 30.4584 5.375 30.4584H37.625C37.625 30.4584 32.25 26.875 32.25 14.3334Z"
      stroke="url(#paint0_linear_37_164)"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_37_164"
        x1={21.5}
        y1={-19.2604}
        x2={21.5}
        y2={39.4104}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C85237" />
        <Stop offset={1} stopColor="#62281B" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BellIcon;
