import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '17d6a1bc-ce1b-42d6-9998-8e12e9a04918'
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
  },unfollowUser(id){
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  },
};

