import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialtState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCounter: 4 },
    { id: 2, message: 'Its my first post', likesCounter: 7 },
    { id: 3, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
    { id: 4, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
  ],
  profile: null,
  status: ''
};

export const profileReducer = (state: any = initialtState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCounter: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p: any) => p.id !== action.postId) }
    }
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: any) => ({ type: SET_STATUS, status })
export const deletePost = (postId: number) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos: number) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
export const getUserProfile = (userId: any) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: any) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)
  profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
}

export const updateStatus = (status: any) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    //
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}
export default profileReducer;
