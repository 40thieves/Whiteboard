import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native';

class Whiteboard extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Whiteboard
				</Text>
			</View>
	);
  }
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});

AppRegistry.registerComponent('whiteboard', () => Whiteboard);
