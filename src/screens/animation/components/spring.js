import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    Animated.spring(translation, {
        toValue: 100,
        useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View>
      <Text>Spring</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'gray',
          transform: [{ translateY: translation }],
        }}
      />
    </View>
  );
};