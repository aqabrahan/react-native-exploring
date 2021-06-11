import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.ValueXY({x: 0, y: 0})
  ).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: -100,
          useNativeDriver: true,
        })
      ]).start();      
    }, 1000);
    
  }, []);

  return (
    <View>
      <Text>Composition parallel</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          transform: [{ translateX: translation.x }, { translateY: translation.y }],
        }}
      />
    </View>
  );
};