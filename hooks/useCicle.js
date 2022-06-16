import React, { useEffect, useState } from 'react';

export default function useCicle({
  strokeSecondaryColor,
  strokeColor,
  radius,
  strokeWidth,
  unique
}) {
  const [activeStrokeColor, setActiveStrokeColor] = useState(strokeColor);

  const radiusCicle = radius + strokeWidth / 2;

  useEffect(() => {
    if(strokeSecondaryColor) {
      setActiveStrokeColor(`url(#gradient${unique})`);
    } else {
      setActiveStrokeColor(strokeColor);
    }
  }, [strokeSecondaryColor, strokeColor]);
    
  return {
    activeStrokeColor,
    radiusCicle,
  };

}