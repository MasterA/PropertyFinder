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

var PropertyView = require('./PropertyView');

var styles = StyleSheet.create({
	thumb: {
		width: 80,
		height: 80,
		marginRight: 10
	},
	textContainer: {
		flex: 1
	},
	seperator: {
		height: 1,
		backgroundColor: '#dddddd'
	},
	price: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#48BBEC'
	},
	title: {
		fontSize: 20,
		color: '#656565'
	},
	rowContainer: {
		flexDirection: 'row',
		padding: 10
	}
});



class SearchResults extends Component {
	constructor(props){
		super(props);
		var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.thumb_url != r2.thumb_url});
		this.state = {dataSource: dataSource.cloneWithRows(this.props.listings)};
	};

	rowPressed(propertythumb_url) {
		var property = this.props.listings.filter(prop => prop.thumb_url === propertythumb_url)[0];

		this.props.navigator.push({
			title: "Property",
			component: PropertyView,
			passProps: {property: property}
		});
	}

	renderRow(rowData, sectionID, rowID){
	  var price = rowData.price_formatted;
		return(
			<TouchableHighlight
				onPress={() => this.rowPressed(rowData.thumb_url)}
				underlayColor='#dddddd'>
				<View>
					<View style={styles.rowContainer}>
						<Image style={styles.thumb} source={{uri: rowData.img_url}} />
						<View style={styles.textContainer}>
							<Text style={styles.price}>{price}</Text>
							<Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
						</View>
					</View>
					<View style={styles.seperator}/>
				</View>
			</TouchableHighlight>
			);
		}


		render(){
			return(
				<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow.bind(this)} />
				);
		}
}

module.exports = SearchResults;
