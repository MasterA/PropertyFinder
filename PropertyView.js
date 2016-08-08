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
	Image,
 	TouchableHighlight
} = ReactNative;

var styles = StyleSheet.create({
	container: {
		marginTop: 65
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
	render() {
		var property = this.props.property;
		var stats = property.bedroom_number + ' bed ' + property.propery_type;
		if (property.bathroom_number) {
			stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
				? 'bathrooms' : 'bathroom');
		}


		var price = property.price_formatted;

		return(
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: property.img_url}} />
				<View style={styles.heading}>
					<Text style={styles.price}>{price}</Text>
					<Text style={styles.title}>{property.title}</Text>
				</View>
				<Text style={styles.description}>{stats}</Text>
				<Text style={styles.description}>{property.summary}</Text>
			  <View style={styles.action}>
		      <TouchableHighlight>
		        <Text style={styles.actionText}>Añedir a favoritos</Text>
		      </TouchableHighlight>
				</View>
				<View style={styles.share}>
					<TouchableHighlight>
						<Text style={styles.actionText}>Compartir</Text>
					</TouchableHighlight>
				</View>
				</View>
		);
	}
}


module.exports = PropertyView;
