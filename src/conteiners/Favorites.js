import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';
import * as actions from '../actions/instaActions';
import Picture from '../components/pictureCard';
import 'antd/dist/antd.css';

class Favorites extends Component {
	constructor(props) {
		super(props);

		this.onClickHandler = () => {
			this.props.history.push('/');
		};
	}

	render() {
		const { favorites, removeFromFavorites } = this.props;

		return (
			<div className="wrapper">
				<div className="favorites">
					<div className="favorites-banner">
						<div className="pictureInfo__back" onClick={this.onClickHandler}>
							<Icon type="left" style={{ fontSize: '36px', color: '#1890ff' }} />
							<div className="pictureInfo__back-text">Back to search</div>
						</div>

						<div className="favorites-banner__title">Favorite pictures</div>
					</div>
					<div className="favorites-conteiner">
						{favorites.map((elem, index) => (
							<div className="picture-faivoirites-conteiner" key={`favorite_${elem.id}+${index}`}>
								<Picture
									id={elem.id}
									index={index}
									datetaken={elem.datetaken}
									title={elem.title}
									url={elem.url_n}
									views={elem.views}
									ownername={elem.ownername}
									path="/favorites"
									text="Back to favorites"
								/>
								<Button
									className="close-icon"
									shape="round"
									type="primary"
									onClick={removeFromFavorites.bind(this, elem.id)}
								>
									<Icon type="close" style={{ fontSize: '14px', color: '#F5CE28' }} />
								</Button>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	favorites: state.instaReduser.favorites
});

export default withRouter(connect(mapStateToProps, actions)(Favorites));
