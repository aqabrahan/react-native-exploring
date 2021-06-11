import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    Animated.timing(translation, {
        toValue: 50,
        delay: 2000,
        duration: 4000,
        useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        transform: [{ translateX: translation }],
      }}
    />
  );
};