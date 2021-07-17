import { connect } from 'react-redux';
import { unfollowAC ,followAC, setUsersAC } from '../../redux/users-reducer';
import Users from "./Users";

let mapStateToProps = (state: any) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: any) => {
      dispatch(setUsersAC(users));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
