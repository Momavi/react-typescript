import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';

function Profile(props: any) {
  return (
    <MyPostsContainer store={props.store} />
  );
}

export default Profile;