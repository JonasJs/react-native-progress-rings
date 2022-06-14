import React, { useEffect, useState } from 'react';

export default function useCicle({
  activeStrokeSecondaryColor,
  activeStrokeColor,
  radius,
  strokeWidth
}) {
  const [strokeColor, setStrokeColor] = useState(activeStrokeColor);

  const radiusCicle = radius + strokeWidth / 2;
  const porcent = 35;

  useEffect(() => {
    if(activeStrokeSecondaryColor) {
      setStrokeColor('url(#gradient)');
    } else {
      setStrokeColor(activeStrokeColor);
    }
  }, [activeStrokeSecondaryColor, activeStrokeColor]);
    
  return {
    strokeColor,
    radiusCicle,
    porcent
  };

}