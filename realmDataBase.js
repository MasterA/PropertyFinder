import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS
} from 'react-native';

//using the dependency of realm
const Realm = require('realm');


//Ream data models are defined by
//the schema information passaed into a Realm during initialization
const CarSchema = {
  name: 'Car',
  properties: {
    make: 'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};

const PersonSchema = {
  name: 'Person',
  properties: {
    name: 'string',
    birthday: 'date',
    cars: {type: 'list', objectType: 'Car'},
    picture: {type: 'data', optional: true},
  }
};

const InvestorsSchema = {
  name: 'Investors',
  properties: {name: 'string'}
};

export default new Realm({ schema: [CarSchema, PersonSchema, InvestorsSchema] });


class realmClass extends Component {
  render() {


  }
}



module.exports = realmClass;
