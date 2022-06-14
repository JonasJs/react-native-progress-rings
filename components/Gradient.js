import React, { memo } from 'react'
import { Defs, LinearGradient, Stop } from 'react-native-svg';

function Gradient({
  activeStrokeColor,
  activeStrokeSecondaryColor,
  unique
}) {
  console.log("ddd => ", `gradient${unique}`)
  return (
    <Defs>
      <LinearGradient
        id={`gradient${unique}`}
        // x1="0%" y1="0%"
        // x2="0%" y2="100%"
        x1="50%" y1="100%" x2="74%" y2="10%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor={activeStrokeSecondaryColor} />
        <Stop offset="100%" stopColor={activeStrokeColor} />
      </LinearGradient>
    </Defs>
  )
}

export default memo(Gradient);
