import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
	state = { messageTimer: null };

	componentDidMount = () => {
		const { closeMessage } = this.props;
		const messageTimer = setTimeout(closeMessage, 3000);
		this.setState({ messageTimer });
	};

	componentWillUnmoumt = () => {
		clearTimeout(this.state.messageTimer);
	};

	render() {
		const { children } = this.props;
		return (
			<div className="background">
				<div id="confirmation-wrapper">{children}</div>
			</div>
		);
	}
}

Message.propTypes = {
	closeMessage: PropTypes.func,
	children: PropTypes.object
};
