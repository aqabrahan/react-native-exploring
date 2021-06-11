import React, { useRef } from 'react';
import {
  Animated,
  useWindowDimensions,
  View,
} from 'react-native';
const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;
export default (props) => {
  const touch = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;
  
  const dimensions = useWindowDimensions();
  
  return (
    <Animated.View style={{ flex: 1 }}
        onStartShouldSetResponder={() => true}
        onResponderMove={(event) => {
            touch.setValue({
                x: event.nativeEvent.locationX,
                y: event.nativeEvent.locationY,
            });
        }}
        onResponderRelease={() => {
            Animated.spring(touch, {
            toValue: {
                x:
                dimensions.width / 2 -
                CURSOR_HALF_SIDE_SIZE,
                y:
                dimensions.height / 2 -
                CURSOR_HALF_SIDE_SIZE,
            },
            // left/top are not supported
            useNativeDriver: false,
            }).start();
        }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          left: touch.x,
          top: touch.y,
          height: CURSOR_SIDE_SIZE,
          width: CURSOR_SIDE_SIZE,
          borderRadius: CURSOR_HALF_SIDE_SIZE,
          backgroundColor: 'orange',
        }}
      />
    </Animated.View>
  );
};
