import React, { useEffect, useState } from 'react';

export default function useCicle({
  activeStrokeSecondaryColor,
  activeStrokeColor,
  radius,
  strokeWidth,
  unique
}) {
  const [strokeColor, setStrokeColor] = useState(activeStrokeColor);

  const radiusCicle = radius + strokeWidth / 2;

  useEffect(() => {
    if(activeStrokeSecondaryColor) {
      setStrokeColor(`url(#gradient${unique})`);
    } else {
      setStrokeColor(activeStrokeColor);
    }
  }, [activeStrokeSecondaryColor, activeStrokeColor]);
    
  return {
    strokeColor,
    radiusCicle,
  };

}