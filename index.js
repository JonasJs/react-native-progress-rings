import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import Svg, { G, Circle, Path } from 'react-native-svg';

// Hooks
import useCicle from "./hooks/useCicle";

// Components
import Gradient from "./components/Gradient";

<ActivityRings>
  <ActivityRings>
    <ActivityRings>

    </ActivityRings>
  </ActivityRings>
</ActivityRings>

export default function ActivityRings({
  strokeWidth = 10,
  radius = 60,
  activeStrokeColor = '#EDAD2B',
  activeStrokeSecondaryColor= '#DF1B47',
  circleBackgroundColor = '#DF1B47',
}) {

  const { strokeColor, radiusCicle, porcent } = useCicle({
    radius,
    strokeWidth,
    activeStrokeColor,
    activeStrokeSecondaryColor
  });

  const viewBox = useMemo(() => {
    return radius + strokeWidth;
  }, [radius, strokeWidth]);
  
  const [pivotX, pivotY] = [radius, radius];
  
  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
        style={{
          transform: [{ rotateZ: '270deg' }]
        }}
      >
        <G rotate={45}>
          {activeStrokeSecondaryColor && (
            <Gradient
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
            // transform={`translate(-${pivotX} -${pivotY})`}
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
      </Svg>
    </View>
  )
}