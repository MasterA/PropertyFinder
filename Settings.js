import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Image,
NavigatorIOS
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  backgroundImage:{
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  //  resizeMode: Image.resizeMode.contain,
  },

});

class Settings extends Component {
  render() {
      return (
        <Image source={require('./Resources/Credits.png')} style={styles.backgroundImage} />
      );
    }
}

module.exports = Settings;
