import { ADD_PHOTO, REMOVE_PHOTO } from "./actionTypes";

export const addPhoto = photoObj => {
  return {
    type: ADD_PHOTO,
    photoObj
  };
};

export const removePhoto = index => {
  return {
    type: REMOVE_PHOTO,
    index
  };
};
