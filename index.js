import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Svg from 'react-native-svg';

// Components
import Rings from "./components/Rings";

export default function ActivityRings({
  strokeWidth = 10,
  radius = 60,
  activeStrokeColor = '#EDAD2B',
  activeStrokeSecondaryColor= '#DF1B47',
  porcent = 10,
  multiple = [],
  style = {},
}) {

  const viewBox = useMemo(() => {
    return radius + strokeWidth;
  }, [radius, strokeWidth]);

  return (
    <View style={{
        width: radius*2,
        height: radius*2,
        position: "relative",
      }}>
      <View style={styles.container}>
        <Text style={{
          color: "red"
        }}>Testando</Text>
      </View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
        style={{
          transform: [{ rotateZ: '270deg' }]
        }}
      >
        {multiple.length > 0 ? 
          multiple.map((ring,index) => {
            return (
              <Rings
                key={index}
                unique={index}
                porcent={ring.porcent}
                strokeWidth={ring.strokeWidth}
                radius={ring.radius}
                activeStrokeSecondaryColor={ring.activeStrokeSecondaryColor}
                activeStrokeColor={ring.activeStrokeColor}
              />
            )
          })
        : (
          <Rings
            porcent={porcent}
            strokeWidth={strokeWidth}
            radius={radius}
            activeStrokeSecondaryColor={activeStrokeSecondaryColor}
            activeStrokeColor={activeStrokeColor}
          />
        )}
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#eaeaea",
    position: "absolute",
  },
});
