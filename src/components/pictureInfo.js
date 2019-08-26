import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import * as actions from '../actions/instaActions';
import { Loader } from './loader';
import Picture from './pictureCard';

class PictureInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iconFlag: false
		};

		this.addToFavoritesHandler = (imageInfo, imageUrl) => {
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

				if (!localStorage.favorites) {
					localStorage.setItem('favorites', JSON.stringify([ data ]));
				} else {
					localStorage.setItem(
						'favorites',
						JSON.stringify(JSON.parse(localStorage.favorites).concat([ data ]))
					);
				}
			}
		};
	}

	componentDidMount() {
		this.props.getFullInfo(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id)
			this.props.getFullInfo(this.props.match.params.id);
	}

	onClickHandler() {
		this.props.history.push('/');
	}

	render() {
		const { imageUrl, imageInfo, isFetching, recentPhotos } = this.props;

		return (
			<div className="wrapper">
				{imageUrl &&
				imageInfo && (
					<div className="pictureInfo">
						<div className="pictureInfo__back" onClick={this.onClickHandler.bind(this)}>
							<Icon type="left" style={{ fontSize: '36px', color: '#1890ff' }} />
							<div className="pictureInfo__back-text">Back to search</div>
						</div>

						<Loader flag={isFetching}>
							<section className="pictureInfo__conteiner">
								<div className="pictureInfo__img-conteiner">
									<img className="pictureInfo__img" src={imageUrl} alt={imageInfo.title._content} />
									<Icon
										type="heart"
										className="pictureInfo__button"
										onClick={this.addToFavoritesHandler.bind(this, imageInfo, imageUrl)}
										theme={this.state.iconFlag ? 'filled' : 'outlined'}
										style={{ fontSize: '28px', color: '#1890ff' }}
									/>
								</div>
								<h1 className="pictureInfo__title">{imageInfo.title._content}</h1>
								<p className="pictureInfo__owner">By {imageInfo.owner.username}</p>
								<h2 className="pictureInfo__description-title">Description</h2>
								<p className="pictureInfo__description-info">{imageInfo.description._content}</p>
								<section className="pictureInfo__date-view-wrapper">
									<p className="pictureInfo__datetaken">{imageInfo.dates.taken}</p>
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
						</Loader>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	photos: state.instaReduser.photos,
	imageUrl: state.instaReduser.imageUrl,
	imageInfo: state.instaReduser.imageInfo,
	recentPhotos: state.instaReduser.recentPhotos,
	isFetching: state.instaReduser.isFetching
});

export default withRouter(connect(mapStateToProps, actions)(PictureInfo));
