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
var Settings = require('./Settings');
var SavedList = require('./SavedList');
var Extra = require('./Extra');


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
       title="Property Finder"
       selected={this.state.selectedTab === 'SearchTab'}
       systemIcon="search"
       onPress={() => {
          this.setState({
          selectedTab: 'SearchTab',
         });
       }}>
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage
       }}/>
       </TabBarIOS.Item>

       <TabBarIOS.Item
        title="SavedListTab"
        selected={this.state.selectedTab === 'SavedListTab'}
        systemIcon="favorites"
        onPress={() => {
           this.setState({
           selectedTab: 'SavedListTab',
         });
        }}>
        <SavedList/>
       </TabBarIOS.Item>


      <TabBarIOS.Item
       title="Settings"
       selected={this.state.selectedTab === 'Settings'}
       systemIcon="more"
       onPress={() => {
          this.setState({
          selectedTab: 'Settings',
        });
       }}>
       <Settings/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
       title="Extra"
       selected={this.state.selectedTab === 'Extra'}
       systemIcon="bookmarks"
       onPress={() => {
          this.setState({
          selectedTab: 'Extra',
        });
       }}>
       <Settings/>
      </TabBarIOS.Item>



     </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('PropertyFinder', function()
{
  return PropertyFinderApp;
});
