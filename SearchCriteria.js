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

class SearchCriteria extends Component {
  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Settings
          </Text>
          <Text style={styles.description}>
            Under Construction :/
          </Text>
        </View>
      );
    }
}

module.exports = SearchCriteria;
