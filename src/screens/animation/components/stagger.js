import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

export default () => {
  const firstOpacity = useRef(
    new Animated.Value(0)
  ).current;
  
  const secondOpacity = useRef(
    new Animated.Value(0)
  ).current;
  
  const thirdOpacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.stagger(125, [
        Animated.timing(firstOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(secondOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(thirdOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();     
    }, 1000);
    
  }, []);

  return (
    <View style={{ position: 'relative', height: 330, backgroundColor: '#f5f5f5'}}>
      <Text>Stagger</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: firstOpacity,
        }}
      />
      
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: secondOpacity,
        }}
      />
      
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: thirdOpacity,
        }}
      />
    </View>
  );
};