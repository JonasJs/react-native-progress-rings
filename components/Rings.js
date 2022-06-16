import React from 'react';
import { G, Circle } from 'react-native-svg';

// Hooks
import useCicle from "../hooks/useCicle";

// Components
import Gradient from "./Gradient";

export default function Rings({
  strokeWidth,
  radius,
  strokeSecondaryColor,
  strokeColor, 
  percentage,
  unique
}) {

  const { activeStrokeColor, radiusCicle} = useCicle({
    radius,
    strokeWidth,
    strokeColor,
    strokeSecondaryColor,
    unique
  });

  return (
    <G rotate={45}>
      {strokeSecondaryColor && (
        <Gradient
          unique={unique}
          strokeColor={strokeColor}
          strokeSecondaryColor={strokeSecondaryColor}
        />
      )}
      <Circle
        cx="50%"
        cy="50%"
        stroke={activeStrokeColor}
        strokeOpacity={0.2}
        strokeWidth={strokeWidth}
        r={radiusCicle}
      />
      <Circle
        cx="50%"
        cy="50%"
        stroke={activeStrokeColor}
        strokeWidth={strokeWidth}
        r={radiusCicle}
        strokeDasharray={2 * Math.PI * radiusCicle}
        strokeLinecap={'round'}
        strokeDashoffset={((100-percentage)/100)*(Math.PI*(radiusCicle*2))}
      />
    </G>
  )
}
