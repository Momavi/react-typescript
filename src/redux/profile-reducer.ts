const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialtState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCounter: 4 },
    { id: 2, message: 'Its my first post', likesCounter: 7 },
    { id: 3, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
    { id: 4, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
  ],
  newPostText: 'GG'
}

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

    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
export default profileReducer;
