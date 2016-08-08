import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
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
  }
});

class SavedList extends Component {
  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            SAVED LIST!!!!!!!
          </Text>
          <Text style={styles.description}>
            :]
          </Text>
        </View>
      );
    }
}

module.exports = SavedList;
