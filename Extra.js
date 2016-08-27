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


class Extra extends Component {
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
            <Text> Im a container </Text>
          </View>
        </View>
      );
    }
}

module.exports = Extra;
