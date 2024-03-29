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


const Realm = require('realm');


class SavedList extends Component {
  render() {

      let realm = new Realm({
        schema: [{name: 'Investors', properties: {name: 'string'}}]
      });

      realm.write(() => {
        realm.create('Investors', {name: 'Rex'})
        console.log('create db:', realm.path);
      });

      return (
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Text> Rentals </Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <Text> Count of Investors in Bass & Austin: {realm.objects('Investors').length} </Text>

          </View>
          <View style={{flex: 3, backgroundColor: 'steelblue'}} >
            <Text> Mexico </Text>
          </View>

        </View>
      );
    }
}

module.exports = SavedList;
