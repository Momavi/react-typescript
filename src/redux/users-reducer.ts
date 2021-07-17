const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialtState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
      followed: true,
      fullName: 'Dmitry',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus' }
    },
    {
      id: 2,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
      followed: true,
      fullName: 'Sasha',
      status: 'I am a boss too',
      location: { city: 'Moscow', country: 'Russia' }
    },
    {
      id: 3,
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
      followed: false,
      fullName: 'Andrew',
      status: 'I am a boss too',
      location: { city: 'Kiev', country: 'Ukraine' }
    }
  ]
}

function usersReducer(state: any = initialtState, action: any) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state;
  }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId })
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({type: SET_USERS, users })

export default usersReducer;