import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ce2e588c-1611-44a2-a291-88d495b2b2fa'
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&&count=${pageSize}`)
      .then(response => response.data)
  },
  followUser(id){
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollowUser(id){
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  },
};

export const authAPI ={
  me(){
    return  instance.get(`auth/me`).then( response => response.data)
  },
  login(email,password,rememberMe = false){
    return instance.post(`auth/login`,{email,password,rememberMe})
  },
  logout(email,password,rememberMe = false){
    return instance.delete(`auth/login`)
  }
};
export const profileAPI = {
  getProfile(userId){
    return  instance.get(`profile/${userId}`).then(response => response.data)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`,{ status: status })
  }
};
