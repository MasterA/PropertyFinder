
/*

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


     <TabBarIOS selectedTab={this.state.selectedTab}>
      <TabBarIOS.Item
       title="SearchTab"
       selected={this.state.selectedTab === 'SearchTab'}
       onPress={() => {
          this.setState({
          selectedTab: 'SearchTab',
         });
       }}>
       <SearchPage/>
      </TabBarIOS.Item>
      <TabBarIOS.Item
       title="SearchTab2"
       selected={this.state.selectedTab === 'SearchTab2'}
       onPress={() => {
          this.setState({
          selectedTab: 'SearchTab2',
         });
       }}>
       {this._renderContent('#21551C', 'SearchTab2')}
      </TabBarIOS.Item>
     </TabBarIOS>



  <Image source={require('./Resources/IMG_2539.png')} style={styles.backgroundImage} />


           <View style={styles.flowRight}>
            <TextInput
             style={styles.searchInput}
             placeholder='what is the max amount'/>
            <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              >
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>


          	//<Image source={require('./Resources/placeholder64x64.png')} style={styles.image}/>
























            'use strict';

            var React = require('react');
      ßß      var {
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
                 marginBottom: -80,
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
            		  flexDirection: 'row',
            		  backgroundColor: '#48BBEC',
            		  borderColor: '#48BBEC',
            		  borderWidth: 1,
            		  borderRadius: 8,
            		  marginBottom: 10,
            		  alignSelf: 'stretch',
            		  justifyContent: 'center',
                  //marginBottom: -40
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
                //  resizeMode: Image.resizeMode.contain,
                },
                locationButtonArea: {
                  marginTop: 80
                }

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
              this.setState({ message: 'Location not recognized; please try again.'});
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
                 <Image source={require('./Resources/IMG_2538.png')} style={styles.backgroundImage}>
                 <View style={styles.container}>

                   <Text style={styles.description}>
                    compartir a amigos o manadar a su agente de bunas raizes.
                     Search by place-name, postcode or search near your location.
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
                  <View style={styles.locationButtonArea}>
                  <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'
                    onPress={this.onLocationPressed.bind(this)}>
                    <Text style={styles.buttonText}>Location</Text>
                  </TouchableHighlight>
                  {spinner}
                  <Text style={styles.description}>{this.state.message}</Text>
                  </View>

            	  </View>
                </Image>
               );
             }
            }


            module.exports = SearchPage;
ßß
*/
