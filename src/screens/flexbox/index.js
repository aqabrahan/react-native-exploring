import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import FlexB from './flex';
import FlexDirection from './flexDirection';
import LayoutDirection from './layoutDirection';
import AlignItems from './alignItems';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={{fontSize: 24}}>Flex Simple</Text>
        <FlexB />
        <Text style={{fontSize: 24}}>Flex Direction</Text>
        <FlexDirection />
        <Text style={{fontSize: 24}}>layout Direction</Text>
        <LayoutDirection />
        <Text style={{fontSize: 24}}>ALIGN ITEMS</Text>
        <AlignItems />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {

  },  
});