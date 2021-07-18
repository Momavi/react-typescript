import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/avatar.png'
import './Users.scss'

function Users(props) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div>
    <div className="users">
      <h3 className="users__title">Users</h3>
      <div className="users__overflow">
        <ul className="users__counter">
          {pages.map(p => {
            return <li className={props.currentPage === p && 'active'}
              onClick={(e) => { props.onPageChanged(p); console.log(props) }}>{p}</li>
          })}
        </ul>
      </div>
      {
        props.users.map((u) => <div key={u.id}>
          <div className="users__wrapper">
            <div className="users__inner">
              <div className="users__avatar">
                <div>
                  <NavLink to={'profile/' + u.id}>
                    <img className="users__avatar-img" src={u.photos.small != null ? u.photos.small : userPhoto} alt="preloader" />
                  </NavLink>
                </div>
                <div>
                  {u.followed
                    ?
                    <button disabled={props.followingInProgess.some(id => id === u.id)} className="users__avatar-button btn"
                      onClick={() => {
                        props.unfollow(u.id)
                      }}>Unfollow</button>
                    :
                    <button disabled={props.followingInProgess.some(id => id === u.id)} className="users__avatar-button btn"
                      onClick={() => {
                        props.follow(u.id)
                      }}>Follow</button>}
                </div>
              </div>
              <div className="users__name">
                <div className="users__name-name">{u.name}</div>
                <div className="users__name-status">{u.status}</div>
              </div>
              <div className="users__location">
                <div className="users__location-country">{"u.location.country"}</div>
                <div className="users__location-city">{"u.location.city"}</div>
              </div>
            </div>

          </div>

        </div>)
      }
    </div>
  </div >
}

export default Users;