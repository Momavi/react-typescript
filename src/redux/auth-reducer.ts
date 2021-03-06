import { authAPI, loginAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialtState = {
  usersId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

function authReducer(state = initialtState, action: { type: any; data: any; }) {
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

export const setAuthUserData = (userId: any, email: any, login: any) => ({
  type: SET_USER_DATA,
  data: { userId, email, login }
})
export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me()

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login));
  }
}

export const LoginUser = (email: any, password: any, rememberMe: any) => async (dispatch: any) => {
  let response = await loginAPI.LoginUser(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
}

export default authReducer;