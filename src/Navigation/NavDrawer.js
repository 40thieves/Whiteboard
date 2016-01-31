import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native'
import { Drawer, COLOR, TYPO } from 'react-native-material-design'

export default class NavigationDrawer extends Component {

	static contextTypes = {
		drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props)

		this.state = { route: null }
	}

	changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({ route: path });

        navigator.to(path, name);
        drawer.closeDrawer();
    };

	render() {
		const { route } = this.state

		return (
			<Drawer>
				<Drawer.Header>
					<View style={styles.header}>
						<Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>Whiteboard</Text>
					</View>
				</Drawer.Header>

				<Drawer.Section
					items={[{
                        icon: 'home',
                        value: 'Repos',
                        active: ! route || route === 'repos',
                        onPress: () => this.changeScene('repos'),
                        onLongPress: () => this.changeScene('repos')
                    }]}
				/>
			</Drawer>
		)
	}

}

const styles = StyleSheet.create({
	header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
})