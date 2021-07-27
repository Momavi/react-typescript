import './Users.scss'
import Paginator from '../common/Paginator/Paginator';
import User from './User'

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
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
        {
          users.map((u) =>
            <User
              user={u}
              followingInProgess={props.followingInProgess}
              key={u.id}
              unfollow={props.unfollow}
              follow={props.follow} />)
        }
      </div>
    </div>
  )
}

export default Users;