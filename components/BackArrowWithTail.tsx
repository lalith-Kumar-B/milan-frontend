import React from 'react';
import Svg, { Path } from 'react-native-svg';
type arrowProps = {
    Awidth? : number,
    Aheight? : number,
    Acolor? : string,
    AstrokeWidth? : number
}
const BackArrowWithTail = (props : arrowProps) => {
  return (
    <Svg
      width={props.Awidth || 24}
      height={props.Aheight || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M19 12H5M12 5l-7 7 7 7"
        stroke={props.Acolor || "black"}
        strokeWidth={props.AstrokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackArrowWithTail;
