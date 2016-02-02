import React, { Component, View, Text, TextInput } from 'react-native'
import { Button } from 'react-native-material-design'

import { logIn } from './api'

export default class LogIn extends Component {

	state = { username: '', password: '', otp: null };

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					<Text style={styles.text}>Username</Text>
					<TextInput
						onChangeText={username => this.setState({ username })}
						value={this.state.username}
						style={styles.input}
					/>
				</View>
				<View style={styles.item}>
					<Text style={styles.text}>Password</Text>
					<TextInput
						secureTextEntry={true}
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						style={styles.input}
					/>
				</View>
				<View style={styles.item}>
					<Text style={styles.text}>2-Factor Auth</Text>
					<TextInput
						keyboardType="number-pad"
						onChangeText={otp => this.setState({ otp })}
						value={this.state.otp}
						style={styles.input}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						value="LOG IN"
						raised={true}
						onPress={this.login}
					/>
				</View>
			</View>
		)
	}

	login = () => {
		logIn(this.state.username, this.state.password, this.state.otp)
	};

}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		marginHorizontal: 20,
		marginTop: 10
	},
	text: {
		fontSize: 16
	},
	input: {
		marginHorizontal: 0,
		paddingTop: 2
	},
	buttonContainer: {
		alignSelf: 'stretch',
		marginHorizontal: 18
	}
}