import './Users.scss'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import { Key } from 'react';

function Users({ currentPage, onPageChanged, totalUsersCount, pageSize, users, isFetching, ...props }: any) {
  return (
    <div>
      <div className="users">
        <h3 className="users__title">Users</h3>
        <div className="users__overflow">
          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize} />
        </div>
        {isFetching ? null
          :
          users.map((u: { id: Key | null | undefined; }) => <User
            user={u}
            followingInProgess={props.followingInProgess}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow} />)}
      </div>
    </div>
  )
}

export default Users;