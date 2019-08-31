import axios from 'axios';
import * as types from '../actionTypes/instaActionTypes';

const apiKey = '1bf71de06a011be4e12a11d22182266f';

const flickr = (method, params) => {
	return axios({
		method: 'get',
		url: 'https://api.flickr.com/services/rest',
		params: {
			api_key: apiKey,
			format: 'json',
			nojsoncallback: 1,
			...params,
			method: `flickr.${method}`
		}
	});
};

export const changeSearchText = (payload) => ({
	type: types.CHANGE_SEARCHTEXT,
	payload
});

export const changeFavorites = (payload) => ({
	type: types.CHANGE_FAVORITES,
	payload
});

export const showMessage = (payload) => ({
	type: types.SHOW_MESSAGE,
	payload
});

export const closeMessage = (payload) => ({
	type: types.CLOSE_MESSAGE,
	payload
});

export const removeFromFavorites = (id) => (dispatch) => {
	const favorites = JSON.parse(localStorage.favorites);
	try {
		favorites.splice(favorites.findIndex((elem) => elem.id === id), 1);
		localStorage.setItem('favorites', JSON.stringify(favorites));
		dispatch(changeFavorites());
	} catch (err) {
		dispatch(showMessage(`Can't remove picture from favorites`));
	}
	return {
		type: types.REMOVE_FROM_FAVORITES,
		favorites
	};
};

export const addToFavorites = (payload) => (dispatch) => {
	const favorites = JSON.parse(localStorage.favorites);
	try {
		if (!localStorage.favorites) {
			localStorage.setItem('favorites', JSON.stringify([ payload ]));
		} else if (favorites.some((elem) => elem.id === payload.id)) {
			dispatch(showMessage('This picture already in favorites'));
		} else {
			localStorage.setItem('favorites', JSON.stringify(favorites.concat([ payload ])));
			dispatch(changeFavorites());
		}
	} catch (err) {
		dispatch(showMessage(`Can't add picture to favorites`));
	}
	return {
		type: types.ADD_TO_FAVORITES,
		payload
	};
};

// GET PICTURES BY SEARCH TEXT
const getPicturesRequest = (payload) => ({
	type: types.GET_PICTURES_REQUEST,
	payload
});

const getPicturesRequestSuccess = (payload) => ({
	type: types.GET_PICTURES_REQUEST_SUCCESS,
	payload
});

const getPicturesRequestFail = (payload) => ({
	type: types.GET_PICTURES_REQUEST_FAIL,
	payload
});

export const getPictures = (text = 'popular') => (dispatch) => {
	dispatch(getPicturesRequest());
	return flickr('photos.search', {
		text: text === '' ? 'popular' : text,
		extras: 'url_n, owner_name, description, date_taken, views',
		page: 1,
		per_page: 30
	})
		.then((res) => dispatch(getPicturesRequestSuccess(res, text)))
		.catch((err) => dispatch(getPicturesRequestFail(err)));
};

// GET PICTURE BY ID
const getPictureByIdRequest = (payload) => ({
	type: types.GET_PICTURE_BY_ID_REQUEST,
	payload
});

const getPictureByIdRequestSuccess = (payload) => ({
	type: types.GET_PICTURE_BY_ID_REQUEST_SUCCESS,
	payload
});

const getPictureByIdRequestFail = (payload) => ({
	type: types.GET_PICTURE_BY_ID_REQUEST_FAIL,
	payload
});

export const getPictureById = (id) => (dispatch) => {
	dispatch(getPictureByIdRequest());
	return flickr('photos.getSizes', { photo_id: id })
		.then((res) => dispatch(getPictureByIdRequestSuccess(res)))
		.catch((err) => dispatch(getPictureByIdRequestFail(err)));
};

// GET INFO BY ID
const getInfoByIdRequest = (payload) => ({
	type: types.GET_INFO_BY_ID_REQUEST,
	payload
});

const getInfoByIdRequestSuccess = (payload) => ({
	type: types.GET_INFO_BY_ID_REQUEST_SUCCESS,
	payload
});

const getInfoByIdRequestFail = (payload) => ({
	type: types.GET_INFO_BY_ID_REQUEST_FAIL,
	payload
});

export const getInfoById = (id) => (dispatch) => {
	dispatch(getInfoByIdRequest());
	return flickr('photos.getInfo', { photo_id: id })
		.then((res) => dispatch(getInfoByIdRequestSuccess(res)))
		.catch((err) => dispatch(getInfoByIdRequestFail(err)));
};

// GET RECENT PHOTO
const getRecentPhotoRequest = (payload) => ({
	type: types.GET_RECENT_PHOTO_REQUEST,
	payload
});

const getRecentPhotoRequestSuccess = (payload) => ({
	type: types.GET_RECENT_PHOTO_REQUEST_SUCCESS,
	payload
});

const getRecentPhotoRequestFail = (payload) => ({
	type: types.GET_RECENT_PHOTO_REQUEST_FAIL,
	payload
});

export const getRecentPhoto = () => (dispatch) => {
	dispatch(getRecentPhotoRequest());
	return flickr('photos.getRecent', {
		extras: 'url_n, owner_name, description, date_taken, views',
		page: 1,
		per_page: 3
	})
		.then((res) => dispatch(getRecentPhotoRequestSuccess(res)))
		.catch((err) => dispatch(getRecentPhotoRequestFail(err)));
};

export const getFullInfo = (id) => {
	return (dispatch) =>
		Promise.all([ dispatch(getInfoById(id)), dispatch(getPictureById(id)), dispatch(getRecentPhoto()) ]);
};
