import React, { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
export default () => {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  //const scrolling = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [
            { translateY: translation },
          ],
        }}
      />
      
      <ScrollView
        onScroll={(event) => {
            const scrolling = event.nativeEvent.contentOffset.y;
            
            if (scrolling > 100) {
            setHeaderShown(true);
            } else {
            setHeaderShown(false);
            }
        }}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </ScrollView>
    </>
  );
}