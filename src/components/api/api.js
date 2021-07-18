import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "dc378807-51a9-479c-923e-ebe2bd7b72c2",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      });
  },
  follow(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unFollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
  }
}

export const authAPI = {
  me() {
      return instance.get(`auth/me`)
  }
}