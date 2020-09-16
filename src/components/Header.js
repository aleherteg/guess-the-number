import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    borderRadius: 50,
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export default Header;
