import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../assets/avatar.png'

import './ProfileInfo.scss'

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className="profile-info">
        <div className="profile-info__wrapper">
        <div className="profile-info__description">
            <h3 className="profile-info__fullname">{props.profile.fullName}</h3>
          </div>
          <div className="profile-info__avatar">
            <img className="profile-info__avatar-img" src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="" />
          </div>

        </div>
        <div className="profile-info__contacts" onClick={console.log(props.profile)}>
          <div>{props.profile.contacts.facebook != null ? props.profile.contacts.facebook : 'facebook: нету'}</div>
          <div>{props.profile.contacts.website != null ? props.profile.contacts.website : 'website: нету'}</div>
          <div>{props.profile.contacts.vk != null ? props.profile.contacts.vk : 'vk: нету'}</div>
          <div>{props.profile.contacts.twitter != null ? props.profile.contacts.twitter : 'twitter: нету'}</div>
          <div>{props.profile.contacts.instagram != null ? props.profile.contacts.instagram : 'instagram: нету'}</div>
          <div>{props.profile.contacts.github != null ? props.profile.contacts.github : 'github: нету'}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;