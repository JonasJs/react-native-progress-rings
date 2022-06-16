import React, { useEffect, useState } from 'react';

export default function useCicle({
  strokeSecondaryColor,
  strokeColor,
  radius,
  strokeWidth,
  unique
}) {
  const [strokeColor, setStrokeColor] = useState(strokeColor);

  const radiusCicle = radius + strokeWidth / 2;

  useEffect(() => {
    if(strokeSecondaryColor) {
      setStrokeColor(`url(#gradient${unique})`);
    } else {
      setStrokeColor(strokeColor);
    }
  }, [strokeSecondaryColor, strokeColor]);
    
  return {
    strokeColor,
    radiusCicle,
  };

}