import {authAPI} from "../components/api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  ifFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email,isAuth}})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then(response => {
    if (response.resultCode === 0) {
      let {id, login, email} = response.data;
      dispatch(setAuthUserData(id, login, email, true))
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }else {
      let errorText = response.data.messages.length > 0? response.data.messages[0]:'';
      let action = stopSubmit('login',{_error: errorText});
      dispatch(action);
    }
  });
}
export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}

export default authReducer;