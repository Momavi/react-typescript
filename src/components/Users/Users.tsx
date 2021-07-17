import axios from "axios"
import userPhoto from '../../assets/avatar.png'
import './Users.scss'

function Users(props: any) {
  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
      });
    }
  }

  return <div>
    <button onClick={getUsers}>Get users</button>
    {
      props.users.map((u: any) => <div key={u.id}>
        <span>
          <div>
            <img className="img" src={u.photos.small != null ? u.photos.small : userPhoto} alt="nagiev" />
          </div>
          <div>
            {u.followed
              ?
              <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              :
              <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;