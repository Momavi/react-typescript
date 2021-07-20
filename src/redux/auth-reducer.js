import { authAPI, loginAPI } from "../components/api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialtState = {
  usersId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

function authReducer(state = initialtState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
}

export const LoginUser = (values) => (dispatch) => {
  console.log(values)
  loginAPI.LoginUser(values)
    .then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        console.log(response.data.userId, values.email, values.login)
        dispatch(setAuthUserData(response.data.userId, values.email, values.login));
      }
    });
}

export default authReducer;