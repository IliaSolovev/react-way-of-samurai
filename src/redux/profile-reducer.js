
import {profileAPI} from "../components/api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) =>  {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.text,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
}


export const addPost = (text) => ({type: ADD_POST,text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then(response => {
    dispatch(setStatus(response.data));
  });
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  });
}

export const getUserProfile = (id) => (dispatch) => {
  profileAPI.getProfile(id).then(data => {
    dispatch(setUserProfile(data));
  });
}

export default profileReducer;