import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const AlignItems = () => {
    const [alignItems, setalignItems] = useState('flex-start');
    return (
      <View style={styles.root}>
        <View style={styles.buttonsContainer}>
          <Button
            title="flex-start"
            onPress={() => setalignItems('flex-start')}
          />
          <Button title="center" onPress={() => setalignItems('center')} />
          <Button title="flex-end" onPress={() => setalignItems('flex-end')} />
          <Button title="stretch" onPress={() => setalignItems('stretch')} />
          <Button title="baseline" onPress={() => setalignItems('baseline')} />
        </View>
  
        <Text style={styles.text}>{`Justify content : ${alignItems}`}</Text>
        <View style={[styles.container, {alignItems}]}>
          <View style={styles.goldContainer} />
          <View style={styles.redContainer} />
          <View style={styles.steelBlueContainer} />
        </View>
      </View>
    );
};

export default AlignItems;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff000'
  },
  text: {fontSize: 30},
  buttonsContainer: {
    flexDirection: 'row',
    height: 400,
  },
  container: {
    flex: 1,
  },
  goldContainer: {
    backgroundColor: 'gold',
    height: 100,
  },
  redContainer: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  steelBlueContainer: {
    backgroundColor: 'steelblue',
    width: 100,
    height: 100,
  },
});