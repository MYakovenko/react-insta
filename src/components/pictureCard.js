import React from 'react';
import { Link } from 'react-router-dom';

const Picture = ({ id, datetaken, title, url, views, ownername, onClick }) => {
	return (
		<Link to={{ pathname: `/item/${id}` }} className="picture">
			<img className="picture__img" src={url} id={id} alt={title} onClick={onClick} />
			<div className="picture__card-body">
				<p className="picture__title">{title}</p>
				<p className="picture__ownername">By {ownername}</p>
				<section className="picture__date-view-wrapper">
					<p className="picture__datetaken">{datetaken}</p>
					<p className="picture__views">Views: {views}</p>
				</section>
			</div>
		</Link>
	);
};

export default Picture;
