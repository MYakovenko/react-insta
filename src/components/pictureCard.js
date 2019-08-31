import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Picture = ({ id, datetaken, title, url, views, ownername, onClick }) => {
	return (
		<Link to={{ pathname: `/item/${id}` }} className="picture">
			<img className="picture__img" src={url} id={id} alt={title} onClick={onClick} />
			<div className="picture__card-body">
				<p className="picture__title">{title}</p>
				<p className="picture__owner-name">By {ownername}</p>
				<section className="picture__date-view-wrapper">
					<p className="picture__date">{datetaken}</p>
					<p className="picture__views">Views: {views}</p>
				</section>
			</div>
		</Link>
	);
};

Picture.propTypes = {
	id: PropTypes.string,
	datetaken: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
	views: PropTypes.string,
	ownername: PropTypes.string,
	onClick: PropTypes.func
};

export default Picture;
