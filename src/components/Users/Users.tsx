function Users(props: any) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
    ]
    )
  }
  return <div>
    {
      props.users.map((u: any) => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} alt="nagiev" />
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;