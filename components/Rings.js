import React from 'react';
import { G, Circle } from 'react-native-svg';

// Hooks
import useCicle from "../hooks/useCicle";

// Components
import Gradient from "./Gradient";

export default function Rings({
  strokeWidth,
  radius,
  activeStrokeSecondaryColor,
  activeStrokeColor, 
  porcent,
  unique
}) {

  const { strokeColor, radiusCicle} = useCicle({
    radius,
    strokeWidth,
    activeStrokeColor,
    activeStrokeSecondaryColor,
    unique
  });

  return (
    <G rotate={45}>
      {activeStrokeSecondaryColor && (
        <Gradient
          unique={unique}
          activeStrokeColor={activeStrokeColor}
          activeStrokeSecondaryColor={activeStrokeSecondaryColor}
        />
      )}
      <Circle
        cx="50%"
        cy="50%"
        stroke={strokeColor}
        strokeOpacity={0.2}
        strokeWidth={strokeWidth}
        r={radiusCicle}
      />
      <Circle
        cx="50%"
        cy="50%"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        r={radiusCicle}
        strokeDasharray={2 * Math.PI * radiusCicle}
        strokeLinecap={'round'}
        strokeDashoffset={((100-porcent)/100)*(Math.PI*(radiusCicle*2))}
      />
    </G>
  )
}
