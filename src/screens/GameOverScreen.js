import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {icons} from '../assets';
import Spacer from '../components/Spacer';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.gameOverImage} source={icons.gameOver} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
        <Spacer size={10} />
        <Text style={styles.text}>The number was: {props.userNumber}</Text>
        <Spacer size={20} />
        <Button
          title="NEW GAME"
          onPress={props.onRestart}
          color={Colors.accent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverImage: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default GameOverScreen;
