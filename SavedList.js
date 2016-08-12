import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS
} from 'react-native';

var styles = StyleSheet.create({
});

class SavedList extends Component {
  render() {
      return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Text> Rentals </Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}}>
            <Text> Sales </Text>
          </View>
          <View style={{flex: 3, backgroundColor: 'steelblue'}} >
            <Text> Mexico </Text>
          </View>

        </View>
      );
    }
}

module.exports = SavedList;
