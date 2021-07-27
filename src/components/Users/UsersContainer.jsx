import React from 'react';
import { connect } from 'react-redux';
import {
  unfollow,
  follow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from '../../redux/users-reducer';
import {
  getUsersState,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgess
} from '../../redux/users-selector'
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgess={this.props.followingInProgess}
        />
      </>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    users: getUsersState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgess: getFollowingInProgess(state),
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)