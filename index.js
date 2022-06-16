import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Svg from 'react-native-svg';

// Components
import Rings from "./components/Rings";

export default function ActivityRings({
  strokeWidth = 10,
  radius = 60,
  strokeColor = '#EDAD2B',
  strokeSecondaryColor = null,
  percentage = 10,
  multiple = [],
  style = {},
  renderMiddle: RenderMiddle = null,
  renderFooter: RenderFooter = null,
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

      <View style={{
        width: radius*2,
        height: radius*2,
        position: "relative",
      }}>
        {RenderMiddle && (
          <View style={styles.container}>
            <RenderMiddle />
          </View>
        )}
        <Svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
          style={{
            transform: [{ rotateZ: '270deg' }],
            position: "absolute",
          }}
        >
          {multiple.length > 0 ? 
            multiple.map((ring,index) => {
              return (
                <Rings
                  key={index}
                  unique={index}
                  percentage={ring?.percentage || 0}
                  strokeWidth={ring?.strokeWidth ||  strokeWidth}
                  radius={ring.radius}
                  strokeSecondaryColor={ring.strokeSecondaryColor}
                  strokeColor={ring.strokeColor}
                />
              )
            })
          : (
            <Rings
              percentage={percentage}
              strokeWidth={strokeWidth}
              radius={radius}
              strokeSecondaryColor={strokeSecondaryColor}
              strokeColor={strokeColor}
            />
          )}
        </Svg>
      </View>
      {RenderFooter && (
        <View style={styles.renderFooter}>
          <RenderFooter />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    borderRadius: 10000,
    alignSelf:"center",
  },
  renderFooter: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    alignSelf:"center",
    marginTop: 8,
  }
});
