import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props: any) {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>

  );
}

export default Profile;