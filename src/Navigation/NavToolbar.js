import React, { Component, PropTypes } from 'react-native'
import { Toolbar as MaterialToolbar } from 'react-native-material-design'

export default class Toolbar extends Component {

	static contextTypes = {
        navigator: PropTypes.object
    };

	render() {
		const { navigator } = this.context
		const { onIconPress } = this.props;

		return (
			<MaterialToolbar
				title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Whiteboard'}
				icon="menu"
				onIconPress={onIconPress}
			/>
		)
	}

}