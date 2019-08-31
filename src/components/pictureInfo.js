import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import * as actions from '../actions/instaActions';
import Loader from './loader';
import Picture from './pictureCard';
import Message from './message';

class PictureInfo extends Component {
	state = {
		iconFlag: false
	};

	componentDidMount = () => {
		this.props.getFullInfo(this.props.match.params.id);
	};

	componentDidUpdate = (prevProps) => {
		if (prevProps.match.params.id !== this.props.match.params.id)
			this.props.getFullInfo(this.props.match.params.id);
	};

	addToFavoritesHandler = (imageInfo, imageUrl) => {
		this.setState((prevState) => ({
			...prevState,
			iconFlag: !prevState.iconFlag
		}));

		if (this.state.iconFlag) {
			this.props.removeFromFavorites();
		}
		if (!this.state.iconFlag) {
			const data = {
				datetaken: imageInfo.dates.taken,
				description: {
					_content: imageInfo.description._content
				},
				id: imageInfo.id,
				ownername: imageInfo.owner.username,
				title: imageInfo.title._content,
				url_n: imageUrl,
				views: imageInfo.views
			};
			this.props.addToFavorites(data);
		}
	};

	onClickHandler = () => {
		this.props.history.push('/');
	};

	render() {
		const { imageUrl, imageInfo, isFetching, recentPhotos, messageFlag, error } = this.props;

		return (
			<div className="wrapper">
				{imageUrl &&
				imageInfo && (
					<div className="pictureInfo">
						<div className="pictureInfo__back" onClick={this.onClickHandler}>
							<Icon type="left" style={{ fontSize: '36px', color: '#1890ff' }} />
							<div className="pictureInfo__back-text">Back to search</div>
						</div>

						<Loader flag={isFetching}>
							<div>
								<section className="pictureInfo__container">
									<div className="pictureInfo__img-container">
										<img
											className="pictureInfo__img"
											src={imageUrl}
											alt={imageInfo.title._content}
										/>
										<Icon
											type="heart"
											className="pictureInfo__button"
											onClick={this.addToFavoritesHandler.bind(null, imageInfo, imageUrl)}
											theme={this.state.iconFlag ? 'filled' : 'outlined'}
											style={{ fontSize: '28px', color: '#1890ff' }}
										/>
									</div>
									<h1 className="pictureInfo__title">{imageInfo.title._content}</h1>
									<p className="pictureInfo__owner">By {imageInfo.owner.username}</p>
									<h2 className="pictureInfo__description-title">Description</h2>
									<p
										className="pictureInfo__description-info"
										dangerouslySetInnerHTML={{ __html: imageInfo.description._content }}
									/>
									<section className="pictureInfo__date-view-wrapper">
										<p className="pictureInfo__date">{imageInfo.dates.taken}</p>
										<p className="pictureInfo__views"> Views: {imageInfo.views}</p>
									</section>
								</section>
								<section className="recent-photos">
									<h1 className="recent-photos__title">Recently added photos</h1>
									<div className="recent-photos__pictures">
										{recentPhotos &&
											recentPhotos.map((elem) => (
												<Picture
													key={elem.id}
													id={elem.id}
													datetaken={elem.datetaken}
													title={elem.title}
													url={elem.url_n}
													views={elem.views}
													ownername={elem.ownername}
												/>
											))}
									</div>
								</section>
							</div>
						</Loader>
					</div>
				)}
				{messageFlag && (
					<Message closeMessage={this.props.closeMessage}>
						<div className="text">{error}</div>
					</Message>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	photos: state.instaReducer.photos,
	imageUrl: state.instaReducer.imageUrl,
	imageInfo: state.instaReducer.imageInfo,
	recentPhotos: state.instaReducer.recentPhotos,
	isFetching: state.instaReducer.isFetching,
	messageFlag: state.instaReducer.messageFlag,
	error: state.instaReducer.error
});

PictureInfo.propTypes = {
	removeFromFavorites: PropTypes.func,
	addToFavorites: PropTypes.func,
	getFullInfo: PropTypes.func,
	closeMessage: PropTypes.func,
	imageUrl: PropTypes.string,
	imageInfo: PropTypes.object,
	isFetching: PropTypes.bool,
	recentPhotos: PropTypes.array,
	messageFlag: PropTypes.bool,
	error: PropTypes.string,
	match: PropTypes.object,
	history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, actions)(PictureInfo));
