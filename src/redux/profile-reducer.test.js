import { addPostActionCreator, profileReducer, deletePost } from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCounter: 4 },
    { id: 2, message: 'Its my first post', likesCounter: 7 },
    { id: 3, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
    { id: 4, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
  ],
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('new text (test)');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
})

it('after deleting length of message should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
})