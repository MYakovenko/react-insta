import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Input, Icon, Button } from 'antd';
import * as actions from '../actions/instaActions';
import 'antd/dist/antd.css';
import '../scss/mainPage.scss';
import Picture from '../components/pictureCard';
import Loader from '../components/loader';
import Message from '../components/message';

class Main extends Component {
	inputRef = React.createRef();

	componentDidMount = () => {
		this.props.getPictures(this.props.searchText);
		this.props.changeFavorites();
	};

	handleSearch = () => {
		const { value } = this.inputRef.current.state;
		this.props.changeSearchText(value);
		this.props.getPictures(value);
	};

	onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		if (this.props.favorites.some((elem) => elem.id === draggableId)) {
			this.props.showMessage('This picture already in favorites');
			return;
		}

		if (source.droppableId !== destination.droppableId && source.droppableId === 'search-results') {
			const draggedPicture = this.props.photos.photos.photo.find((elem) => elem.id === draggableId);

			this.props.addToFavorites(draggedPicture);
		}
	};

	render() {
		const { photos, isFetching, favorites, removeFromFavorites, messageFlag, error } = this.props;

		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<div className="wrapper">
					<div className="container">
						<div className="container__title">
							Find your inspiration with <span className="container__title__logo">INSTA</span>
						</div>
						<div className="container__input-wrapper">
							<Input
								id="search-input"
								type="text"
								ref={this.inputRef}
								prefix={<Icon type="search" />}
								onPressEnter={this.handleSearch}
							/>
							<Button onClick={this.handleSearch} shape="round" type="primary">
								Search
							</Button>
						</div>
					</div>
					<Link to={{ pathname: `/favorites` }}>
						<h3 className="favorite_title mobile">Favorites</h3>
					</Link>
					<Loader flag={isFetching}>
						<div className="pictures-wrapper">
							<Droppable droppableId="search-results" type="insta">
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className={
											snapshot.isDraggingOver ? (
												'pictures-wrapper_main isDraggingOver'
											) : (
												'pictures-wrapper_main'
											)
										}
									>
										{photos &&
											photos.photos.photo.filter((image) => image.url_n).map((elem, index) => (
												<Draggable draggableId={elem.id} index={index} key={elem.id}>
													{(provided) => (
														<div
															id={elem.id}
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
														>
															<Picture
																id={elem.id}
																index={index}
																datetaken={elem.datetaken}
																title={elem.title}
																url={elem.url_n}
																views={elem.views}
																ownername={elem.ownername}
															/>
														</div>
													)}
												</Draggable>
											))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
							<Droppable droppableId="favorites" type="insta">
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.droppableProps}
										className="pictures-wrapper_favorite"
									>
										<Link to={{ pathname: `/favorites` }}>
											<h3 className="favorite_title">Favorites</h3>
										</Link>
										<div className="pictures-wrapper_favorite_block">
											{favorites &&
												favorites.map((elem, index) => (
													<div
														className="picture-favorites-container"
														key={`favorite_${elem.id}+${index}`}
													>
														<Picture
															id={elem.id}
															index={index}
															datetaken={elem.datetaken}
															title={elem.title}
															url={elem.url_n}
															views={elem.views}
															ownername={elem.ownername}
														/>
														<Button
															className="close-icon"
															shape="round"
															type="primary"
															onClick={removeFromFavorites.bind(this, elem.id)}
														>
															<Icon
																type="close"
																style={{ fontSize: '14px', color: '#F5CE28' }}
															/>
														</Button>
													</div>
												))}
										</div>
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					</Loader>
				</div>
				{messageFlag && (
					<Message closeMessage={this.props.closeMessage}>
						<div className="text">{error}</div>
					</Message>
				)}
			</DragDropContext>
		);
	}
}

const mapStateToProps = (state) => ({
	photos: state.instaReducer.photos,
	imageUrl: state.instaReducer.imageUrl,
	imageInfo: state.instaReducer.imageInfo,
	searchText: state.instaReducer.searchText,
	isFetching: state.instaReducer.isFetching,
	favorites: state.instaReducer.favorites,
	messageFlag: state.instaReducer.messageFlag,
	error: state.instaReducer.error
});

Main.propTypes = {
	getPictures: PropTypes.func,
	changeFavorites: PropTypes.func,
	changeSearchText: PropTypes.func,
	closeMessage: PropTypes.func,
	addToFavorites: PropTypes.func,
	photos: PropTypes.object,
	isFetching: PropTypes.bool,
	messageFlag: PropTypes.bool,
	error: PropTypes.string,
	searchText: PropTypes.string,
	favorites: PropTypes.array,
	removeFromFavorites: PropTypes.func,
	showMessage: PropTypes.func
};

export default connect(mapStateToProps, actions)(Main);
