import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.ValueXY({x: 0, y: 0})
  ).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.spring(translation.x, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.spring(translation.x, {
            toValue: 100,
            useNativeDriver: true,
          }),
          Animated.spring(translation.y, {
            toValue: -100,
            useNativeDriver: true,
          }),
        ]),
      ]).start();      
    }, 1000);
    
  }, []);

  return (
    <View style={{ position: 'relative', height: 300}}>
      <Text>Composition Mix parallel sequence</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'gold',
          transform: [{ translateX: translation.x }, { translateY: translation.y }],
        }}
      />
    </View>
  );
};