'use strict';
var React = require('react');
var {
	Component
} = React;

var ReactNative = require('react-native');
var {
	ScrollView,
  StyleSheet,
	Text,
	View,
	Image,
 	TouchableHighlight,
	AlertIOS
} = ReactNative;

var styles = StyleSheet.create({
	container: {
		marginTop: 0
	},
	heading: {
		backgroundColor: '#F8F8F8',
	},
	seperator: {
		height: 1,
		backgroundColor: '#DDDDDD'
	},
	image: {
		width: 400,
		height: 300
	},
	price: {
		fontSize: 25,
		fontWeight: 'bold',
		margin: 5,
		color: '#48BBEC'
	},
	title: {
		fontSize: 20,
		margin: 5,
		color: '#656565'
	},
	description: {
		fontSize: 18,
		margin: 5,
		color: '#656565'
	},


 actionText: {
  color: '#fff',
  fontSize: 16,
  textAlign: 'center',
	},
	action: {
	  backgroundColor: '#55dc97',
	  borderColor: 'transparent',
	  borderWidth: 1,
	  paddingTop: 14,
	  paddingBottom: 16,
	},
	share: {
		backgroundColor: '#559bdc',
		borderColor: 'transparent',
		borderWidth: 1,
		paddingTop: 14,
		paddingBottom: 16,
	}
});

import Share, {ShareSheet, Button} from 'react-native-share';


class PropertyView extends Component {

	constructor(props) {
   super(props);
		// $FlowFixMe this seems to be a Flow bug, `saveResponse` is defined below
	 this.saveResponse = this.saveResponse.bind(this);
	 this.state = {
			propertyToSave: 'ok',
			promptValue: '',
	 }
	}

	// saves entered comment in prompt that appears in alert box when clicking 'Add to favorites'
	saveResponse(promptValue) {
		this.setState({ promptValue: JSON.stringify(promptValue) });
		console.log(this.state.promptValue);
	}


	render() {

		// for properties that are used in the share prompt when
		// clicking the share button
		let shareOptions = {
			title: "React Native",
			message: "Hola mundo",
			url: "http://facebook.github.io/react-native/",
			subject: "Share Link" //  for email
		};


		// property has all the properties of such property so its an object with such properties.
		var property = this.props.property;
		var stats = property.bedroom_number + ' bed ' + property.property_type;
		if (property.bathroom_number) {
			stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
				? 'bathrooms' : 'bathroom');
		}

		var price = property.price_formatted;

		return(
			<ScrollView style={styles.container}>
				<Image style={styles.image} source={{uri: property.img_url}} />
				<View style={styles.heading}>
					<Text style={styles.price}>{price}</Text>
					<Text style={styles.title}>{property.title}</Text>
				</View>
				<Text style={styles.description}>{stats}</Text>
				<Text style={styles.description}>{property.summary}</Text>
			  <View style={styles.action}>
				  {/* Add to favorites button */}
		      <TouchableHighlight
					onPress={() => AlertIOS.prompt('You are about to save: '
					+ this.props.property.title + ' to your list of favorites. '
					, 'Optional: You can add a note about this house. e.g. why you like this house?'
					, this.saveResponse, 'plain-text', '')}>
		        <Text style={styles.actionText}>Add to favorites</Text>
		      </TouchableHighlight>
				</View>
				<View style={styles.share}>
				 {/* share button */}
					<TouchableHighlight
					onPress={()=>{Share.open(shareOptions);}}>
						<Text style={styles.actionText}>Share</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		);
	}


}


module.exports = PropertyView;
