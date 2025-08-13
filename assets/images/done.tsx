import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props:any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect opacity={0.5} width={24} height={24} rx={7} fill="#C6CFDC" />
      <Path
        d="M7 12l3.33 3L17 9"
        stroke="#F5F7F9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
