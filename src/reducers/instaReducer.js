import * as types from '../actionTypes/instaActionTypes';
import initialValue from '../store/initialValue';

export default (state = initialValue, action) => {
	switch (action.type) {
		case types.CHANGE_SEARCHTEXT: {
			return {
				...state,
				searchText: action.payload
			};
		}

		case types.CHANGE_FAVORITES: {
			return {
				...state,
				favorites: localStorage.favorites && JSON.parse(localStorage.favorites).reverse()
			};
		}

		case types.REMOVE_FROM_FAVORITES: {
			return {
				...state,
				favorites: localStorage.favorites && JSON.parse(localStorage.favorites).reverse()
			};
		}

		// GET PICTURES BY SEARCH TEXT
		case types.GET_PICTURES_REQUEST: {
			return { ...state, isFetching: true };
		}
		case types.GET_PICTURES_REQUEST_SUCCESS: {
			const { data } = action.payload;
			return {
				...state,
				photos: data,
				isFetching: false
			};
		}
		case types.GET_PICTURES_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		// GET PICTURE BY ID
		case types.GET_PICTURE_BY_ID_REQUEST: {
			return { ...state, isFetching: true };
		}
		case types.GET_PICTURE_BY_ID_REQUEST_SUCCESS: {
			const { data } = action.payload;
			const sizes = data.sizes.size;
			const imageUrl = sizes.filter((s) => s.label === 'Large' || s.label === 'Original')[0].source;
			return {
				...state,
				imageUrl,
				isFetching: false
			};
		}
		case types.GET_PICTURE_BY_ID_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		// GET INFO BY ID
		case types.GET_INFO_BY_ID_REQUEST: {
			return { ...state, isFetching: true };
		}
		case types.GET_INFO_BY_ID_REQUEST_SUCCESS: {
			const { data } = action.payload;
			const imageInfo = data.photo;
			return {
				...state,
				imageInfo,
				isFetching: false
			};
		}
		case types.GET_INFO_BY_ID_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		// GET RECENT PHOTO
		case types.GET_RECENT_PHOTO_REQUEST: {
			return { ...state, isFetching: true };
		}
		case types.GET_RECENT_PHOTO_REQUEST_SUCCESS: {
			const { data } = action.payload;
			const recentPhotos = data.photos.photo;

			return {
				...state,
				recentPhotos,
				isFetching: false
			};
		}
		case types.GET_RECENT_PHOTO_REQUEST_FAIL: {
			return { ...state, isFetching: false };
		}

		default:
			return state;
	}
};
