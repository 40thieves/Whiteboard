import React, { AppRegistry, Component, PropTypes, DrawerLayoutAndroid, Navigator, View } from 'react-native';

import NavDrawer from './src/Navigation/NavDrawer'
import Router from './src/Navigation/Router'
import NavToolbar from './src/Navigation/NavToolbar'

class Whiteboard extends Component {

	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props)

		this.state = { drawer: null, navigator: null }
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = drawer => {
		this.setState({ drawer })
	};

	setNavigator = navigator => {
		this.setState({
			navigator: new Router(navigator)
		});
	};

	render() {
		const { drawer, navigator } = this.state

		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}

				ref={drawer => { ! this.state.drawer ? this.setDrawer(drawer) : null }}

				renderNavigationView={() => {
					if (drawer && navigator)
						return React.createElement(NavDrawer)

					return null
				}}
			>
				{drawer && <Navigator
					initialRoute={Router.getInitialRoute()}
					navigationBar={<NavToolbar onIconPress={drawer.openDrawer} />}

					ref={navigator => ! this.state.navigator ? this.setNavigator(navigator) : null}

					configureScene={() => Navigator.SceneConfigs.FadeAndroid}
					renderScene={route => {
                        if (navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}
                                >
                                	<route.component title={route.title} path={route.path} {...route.props} />
                                </View>
                            );
                        }
                    }}
				/>}
			</DrawerLayoutAndroid>
		)
	}

}

const styles = {
	scene: {
		flex: 1,
		marginTop: 56
	}
}

AppRegistry.registerComponent('whiteboard', () => Whiteboard);
