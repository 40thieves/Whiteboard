import React, { Component, StyleSheet, ListView, View, Text } from 'react-native'
import Dimensions from 'Dimensions'
import { Button, Card } from 'react-native-material-design'

import { getRepos } from './api'

export default class ReposList extends Component {

	constructor(props) {
		super(props)

		this.requestRepo = this.requestRepo.bind(this)

		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
		this.state = { repos: ds.cloneWithRows([]) }
	}

	render() {
		const { repos } = this.state

		return (
			<View>
				<Button value="REQUEST" onPress={this.requestRepo} />

				<ListView
					dataSource={repos}
					renderRow={this.renderRow}
					style={styles.list}
				/>
			</View>
		);
	}

	renderRow(repo) {
		return (
			<View key={repo.id}>
				<Card>
					<Card.Body>
						<Text>{repo.name}</Text>
					</Card.Body>
					<Card.Actions>
						<Button value="Click" />
					</Card.Actions>
				</Card>
			</View>
		)
	}

	requestRepo() {
 		getRepos().then(repos => {
			this.setState({ repos: this.state.repos.cloneWithRows(repos) })
		})
	}

}

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height
	}
})