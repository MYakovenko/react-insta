import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const Loader = ({ children, flag }) =>
	flag ? (
		<div className="loader loader-wrapper">
			<Spin size="large" />
			<div className="loader__text">Loading...</div>{' '}
		</div>
	) : (
		children
	);

Loader.propTypes = {
	flag: PropTypes.bool,
	children: PropTypes.element
};
export default Loader;
