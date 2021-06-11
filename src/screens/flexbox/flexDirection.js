import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const FlexDirection = () => {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button title="column" onPress={() => setFlexDirection('column')} />
        <Button title="row" onPress={() => setFlexDirection('row')} />
        <Button
          title="row-reverse"
          onPress={() => setFlexDirection('row-reverse')}
        />
        <Button
          title="column-reverse"
          onPress={() => setFlexDirection('column-reverse')}
        />
      </View>

      <Text style={styles.text}>{`Flex direction : ${flexDirection}`}</Text>
      <View style={[styles.container, {flexDirection}]}>
        <View style={styles.goldContainer} />
        <View style={styles.redContainer} />
        <View style={styles.steelBlueContainer} />
      </View>
    </>
  );
};

export default FlexDirection;

const styles = StyleSheet.create({
  root: {},
  text: {fontSize: 30},
  buttonsContainer: {
    flexDirection: 'row',
    height: 300,
  },
  container: {
    flex: 1,
  },
  goldContainer: {
    backgroundColor: 'gold',
    width: 100,
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