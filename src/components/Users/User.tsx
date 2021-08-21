import { NavLink } from "react-router-dom";
import UserPhoto from './../../assets/avatar.png'

let User = ({ user, followingInProgess, unfollow, follow }: any) => {
  return (
    <div key={user.id}>
      <div className="users__wrapper">
        <div className="users__inner">
          <div className="users__avatar">
            <div>
              <NavLink to={'profile/' + user.id}>
                <img className="users__avatar-img" src={user.photos.small != null ? user.photos.small : UserPhoto} alt="preloader" />
              </NavLink>
            </div>
            <div>
              {user.followed
                ?
                <button disabled={followingInProgess.some((id: number) => id === user.id)} className="users__avatar-button btn"
                  onClick={() => {
                    unfollow(user.id)
                  }}>Unfollow</button>
                :
                <button disabled={followingInProgess.some((id: number) => id === user.id)} className="users__avatar-button btn"
                  onClick={() => {
                    follow(user.id)
                  }}>Follow</button>}
            </div>
          </div>
          <div className="users__name">
            <div className="users__name-name">{user.name}</div>
            <div className="users__name-status">{user.status}</div>
          </div>
          <div className="users__location">
            <div className="users__location-country">{"u.location.country"}</div>
            <div className="users__location-city">{"u.location.city"}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default User;