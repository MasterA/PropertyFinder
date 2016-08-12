'use strict';

var React = require('react');
var {
 Component
} = React;

var ReactNative = require('react-native');
var {
 ActivityIndicator,
 StyleSheet,
 Text,
 TextInput,
 View,
 TouchableHighlight,
 Image,
 ListView
} = ReactNative;

var styles = StyleSheet.create({

    flexContainers: {
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    flexItemImage: {
      alignItems: 'center',
      paddingBottom: 10,
      width:300,
      height: 300,
    },
    description: {
      marginBottom: 10,
      fontSize: 12,
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
    },
	 flowRight: {
	   flexDirection: 'row',
	   alignItems: 'center',
	   alignSelf: 'stretch',
		},
		buttonText: {
		  fontSize: 18,
		  color: 'white',
		  alignSelf: 'center',
      //marginBottom: -40
		},
		button: {
		  height: 36,
		  flex: 1,
		  backgroundColor: '#48BBEC',
		  borderColor: '#48BBEC',
		  borderWidth: 1,
		  borderRadius: 8,
		  marginBottom: 10,
      flexDirection: 'row',
		  alignSelf: 'stretch',
		  justifyContent: 'center',
		},
		searchInput: {
		  height: 36,
		  padding: 4,
		  marginRight: 5,
		  flex: 4,
		  fontSize: 18,
		  borderWidth: 1,
		  borderColor: '#48BBEC',
		  borderRadius: 8,
		  color: '#48BBEC',
      marginBottom: -40
		},
    backgroundImage:{
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'stretch',
      flex: 1,
    },

});

var SearchResults = require('./SearchResults');


function urlForQueryAndPage(key, value, pageNumber) {
 var data = {
     country: 'mx',
     pretty: '1',
     encoding: 'json',
     listing_type: 'buy',
     action: 'search_listings',
     page: pageNumber
 };
 data[key] = value;

 var queryString = Object.keys(data)
  .map(key => key + '=' + encodeURIComponent(data[key]))
  .join('&');

 return 'http://api.nestoria.mx/api?' + queryString;
};


class SearchPage extends Component {

 constructor(props) {
   super(props);
   this.state = {
     searchString: 'Piedras Negras',
     isLoading: false,
     message: ''
   };
 }

 onSearchTextChanged(event) {
   this.setState({ searchString: event.nativeEvent.text });
 }

_handleResponse(response){
 this.setState({ isLoading: false, message: ''});
 if(response.application_response_code.substr(0,1) === '1') {
  this.props.navigator.push ({
   title: 'Results',
   component: SearchResults,
   passProps: {listings: response.listings}
  });
 } else {
  this.setState({ message: 'Location not recognized, please try again.'});
 }
}


_executeQuery(query){
  this.setState({ isLoading: true });

  fetch(query)
   .then(response => response.json())
   .then(json => this._handleResponse(json.response))
   .catch(error =>
    this.setState({
      isLoading: false,
      message: 'Something bad happend ' + error
     })
   );
 }

 onSearchPressed(){
  var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
  this._executeQuery(query);
 }


 onLocationPressed() {
  navigator.geolocation.getCurrentPosition(
   location => {
    var search = location.coords.latitude + ',' + location.coords.longitude;
    this.setState({searchString: search});
    var query = urlForQueryAndPage('centre_point', search, 1);
   },
   error => {
    this.setState({
     message: 'There was a problem with obtaning your location: ' + error
    });
   });
 }


 render() {
   var spinner = this.state.isLoading ?
     ( <ActivityIndicator
         size='large'/> ) :
     ( <View/> )
   return (

     <View style={styles.flexContainers}>
       <Image source={require('./Resources/IMG_2538.png')} style={styles.flexItemImage}/>
       <Text style={styles.description}>
        Type city, address, or zip code.
       </Text>

			 <View style={styles.flowRight}>
          <TextInput
           style={styles.searchInput}
           value={this.state.searchString}
           onChange={this.onSearchTextChanged.bind(this)}
           placeholder='Search via name or postcode'/>
    		  <TouchableHighlight style={styles.button}
    		    underlayColor='#99d9f4'
            onPress={this.onSearchPressed.bind(this)}>
    	    <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
      </View>

			<View style={styles.flowRight}>
        <TouchableHighlight style={styles.button}
          underlayColor='#99d9f4'
          onPress={this.onLocationPressed.bind(this)}>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.description}>{this.state.message}</Text>

      {spinner}

	  </View>

   );
 }
}


module.exports = SearchPage;
