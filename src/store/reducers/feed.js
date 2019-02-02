import { ADD_PHOTO, REMOVE_PHOTO } from "../actions/actionTypes";

const initialState = {
  photos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...state,
        photos: state.photos.concat(action.photoObj)
      };
    case REMOVE_PHOTO:
      let photos = state.photos;
      photos.splice(action.index, 1);
      return {
        ...state,
        photos
      };
    default:
      return state;
  }
};

export default reducer;
