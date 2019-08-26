import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Input, Icon, Button } from 'antd';
import * as actions from '../actions/instaActions';
import 'antd/dist/antd.css';
import '../scss/mainPage.scss';
import Picture from '../components/pictureCard';
import { Loader } from '../components/loader';

class Main extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.state = {
			fixed: false
		};

		this.listenScrollEvent = () => {
			if (window.scrollY > 500) {
				this.setState((prevState) => ({
					...prevState,
					fixed: true
				}));
			} else {
				this.setState((prevState) => ({
					...prevState,
					fixed: false
				}));
			}
		};
	}

	componentDidMount() {
		this.props.getPictures(this.props.searchText);
		this.props.changeFavorites();
		window.addEventListener('scroll', this.listenScrollEvent);
	}

	handleSearch() {
		const { value } = this.inputRef.current.state;
		this.props.changeSearchText(value);
		this.props.getPictures(value);
	}

	onDragEnd(result) {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		if (source.droppableId !== destination.droppableId && source.droppableId === 'search-results') {
			const draggedPicture = this.props.photos.photos.photo.find((elem) => elem.id === draggableId);

			if (!localStorage.favorites) {
				localStorage.setItem('favorites', JSON.stringify([ draggedPicture ]));
			} else {
				localStorage.setItem(
					'favorites',
					JSON.stringify(JSON.parse(localStorage.favorites).concat([ draggedPicture ]))
				);
				this.props.changeFavorites();
			}
		}
	}

	render() {
		const { photos, isFetching, favorites, removeFromFavorites } = this.props;

		return (
			<DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
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
								onPressEnter={this.handleSearch.bind(this)}
							/>
							<Button onClick={this.handleSearch.bind(this)} shape="round" type="primary">
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
										className={
											this.state.fixed ? (
												'pictures-wrapper_favorite fixed'
											) : (
												'pictures-wrapper_favorite'
											)
										}
									>
										<Link to={{ pathname: `/favorites` }}>
											<h3 className="favorite_title">Favorites</h3>
										</Link>
										{favorites &&
											favorites.map((elem, index) => (
												<div
													className="picture-faivoirites-conteiner"
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
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					</Loader>
				</div>
			</DragDropContext>
		);
	}
}

const mapStateToProps = (state) => ({
	photos: state.instaReduser.photos,
	imageUrl: state.instaReduser.imageUrl,
	imageInfo: state.instaReduser.imageInfo,
	searchText: state.instaReduser.searchText,
	isFetching: state.instaReduser.isFetching,
	favorites: state.instaReduser.favorites
});

export default connect(mapStateToProps, actions)(Main);
