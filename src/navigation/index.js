import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import AnimateScreen from '../screens/animation';
import AnimateScroll from '../screens/animate-scroll';
import GestureScreen from '../screens/gesture';
import FlexBoxScreen from '../screens/flexbox';

const Stack = createStackNavigator();
/* function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
} */

function Navs () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation" component={AnimateScreen} />
        <Stack.Screen name="AnimateScroll" component={AnimateScroll} />
        <Stack.Screen name="Gesture" component={GestureScreen} />
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navs;