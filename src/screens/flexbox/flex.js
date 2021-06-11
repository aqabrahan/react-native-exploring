import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.goldContainer} />
      <View style={styles.redContainer} />
      <View style={styles.steelBlueContainer} />
    </View>
  );
};

export default FlexFlex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
  },
  goldContainer: {
    flex: 1,
    backgroundColor: 'gold',
  },
  redContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  steelBlueContainer: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});