import MyPosts from './MyPosts/MyPosts';
import './Profile.scss';

function Profile(props: any) {

  return (
    <MyPosts posts={props.state.posts}/>
  );
}

export default Profile;