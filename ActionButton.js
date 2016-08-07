'use strict';

var React = require('react');
var {
  Component
} = React;

var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image
} = ReactNative;


const styles = require('../Styles.js')
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;