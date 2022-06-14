import React, { memo } from 'react'
import { Defs, LinearGradient, Stop } from 'react-native-svg';

function Gradient({
  activeStrokeColor,
  activeStrokeSecondaryColor,
}) {
  return (
    <Defs>
      <LinearGradient
        id="gradient"
        x1="0%" y1="0%"
        x2="0%" y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor={activeStrokeSecondaryColor} />
        <Stop offset="100%" stopColor={activeStrokeColor} />
      </LinearGradient>
    </Defs>
  )
}

export default memo(Gradient);
