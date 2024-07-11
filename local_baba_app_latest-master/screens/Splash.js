import { StyleSheet, ImageBackground, Image, StatusBar } from 'react-native';
import React from 'react';
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('CustomSlider')
  }, 2000);
  return (
    <ImageBackground style={styles.container} source={require('../images/back.png')}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'light-content'} />
      <Image style={{ height: 200, width: 200, resizeMode: 'contain' }} source={require('../images/logo.png')} />
    </ImageBackground>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});