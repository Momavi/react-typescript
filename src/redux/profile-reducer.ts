import { profileAPI, usersAPI } from "../components/api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialtState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCounter: 4 },
    { id: 2, message: 'Its my first post', likesCounter: 7 },
    { id: 3, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
    { id: 4, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
  ],
  newPostText: 'GG',
  profile: null,
  status: ''
};

const profileReducer = (state: any = initialtState, action: any) => {
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
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: any) => ({ type: SET_STATUS, status })
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
export const getUserProfile = (userId: any) => (dispatch: any) => {
  usersAPI.getProfile(userId)
    .then((response: any) => {
      dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId: any) => (dispatch: any) => {
  profileAPI.getStatus(userId)
    .then((response: any) => {
      dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status: any) => (dispatch: any) => {
  profileAPI.updateStatus(status)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
}
export default profileReducer;
