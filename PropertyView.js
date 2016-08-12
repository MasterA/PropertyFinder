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

class PropertyView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			propertyToSave: 'ok'
		}
	}

	onFavoritesSaved(event){
			this.setState({propertyToSave: event.nativeEvent.message});
			var title = this.props.property.title;
			console.log(this.props.property);
			AlertIOS.alert( 'you just saved: ' + title );
	}


	render() {
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
		      <TouchableHighlight
					onPress={this.onFavoritesSaved.bind(this)}>
		        <Text style={styles.actionText}>Add to favorites</Text>
		      </TouchableHighlight>
				</View>
				<View style={styles.share}>
					<TouchableHighlight>
						<Text style={styles.actionText}>Share</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		);
	}
}


module.exports = PropertyView;
