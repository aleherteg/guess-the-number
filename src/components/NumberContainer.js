import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
  },
  number: {
    color: Colors.accent,
    fontSize: 26,
  },
});
export default NumberContainer;
