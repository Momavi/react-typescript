export const getUsersState = (state: { usersPage: { users: any; }; }) => {
  return state.usersPage.users;
}

export const getPageSize = (state: { usersPage: { pageSize: any; }; }) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: { usersPage: { totalUsersCount: any; }; }) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: { usersPage: { currentPage: any; }; }) => {
  return state.usersPage.currentPage;
}

export const getIsFetching = (state: { usersPage: { isFetching: any; }; }) => {
  return state.usersPage.isFetching;
}

export const getFollowingInProgess = (state: { usersPage: { followingInProgess: any; }; }) => {
  return state.usersPage.followingInProgess;
}
