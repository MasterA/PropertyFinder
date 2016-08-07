/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS,
TabBarIOS,
} from 'react-native';

var SearchPage = require('./SearchPage');
var TabBarExample = require('./TabBarIOS');

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});



class PropertyFinderApp extends Component {

 constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'SearchTab'
    };
  }

  _renderContent(color: string, pageText: string) {
  return (
    <View style={[styles.tabContent, {backgroundColor: color}]}>
      <Text style={styles.tabText}>{pageText}</Text>
    </View>
  )
 }

  render() {
    return (
     
     <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
       title="SearchTab"
       selected={this.state.selectedTab === 'SearchTab'}
       onPress={() => {
          this.setState({
          selectedTab: 'SearchTab',
         });
       }}>
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
       }}/>
      </TabBarIOS.Item>
      <TabBarIOS.Item
       title="SearchTab2"
       selected={this.state.selectedTab === 'SearchTab2'}
       onPress={() => {
          this.setState({
          selectedTab: 'SearchTab2',
         })
       }}>
       {this._renderContent('#21551C', 'SearchTab2')}
      </TabBarIOS.Item>
     </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('PropertyFinder', function()
{
  return PropertyFinderApp;
});