import React, { useEffect, useRef } from 'react';
import { Animated, View, Easing, Text } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    Animated.timing(translation, {
        toValue: 100,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <Text>Easing</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          transform: [{ translateY: translation }],
        }}
      />
    </View>
  );
};