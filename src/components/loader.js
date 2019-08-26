import React from 'react';
import { Spin } from 'antd';

export const Loader = ({ children, flag }) =>
	flag ? (
		<div className="loader loader-wrapper">
			<Spin size="large" />
			<div className="loader__text">Loading...</div>{' '}
		</div>
	) : (
		children
	);
