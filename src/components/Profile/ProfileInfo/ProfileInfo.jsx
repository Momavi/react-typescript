import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../assets/avatar.png'
import ProfileStatus from './ProfileStatus'

import './ProfileInfo.scss'

function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto }) {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className="profile-info">
        <div className="profile-info__wrapper">
          <div className="profile-info__inner">
            <div className="profile-info__avatar">
              <img className="profile-info__avatar-img" src={profile.photos.large || userPhoto} alt="" />
            </div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            <div className="profile-info__description">
              <h3 className="profile-info__fullname">{profile.fullName}</h3>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </div>
        </div>

        <div className="profile-info__contacts">
          <div>{profile.contacts.facebook || 'facebook: нету'}</div>
          <div>{profile.contacts.website || 'website: нету'}</div>
          <div>{profile.contacts.vk || 'vk: нету'}</div>
          <div>{profile.contacts.twitter || 'twitter: нету'}</div>
          <div>{profile.contacts.instagram || 'instagram: нету'}</div>
          <div>{profile.contacts.github || 'github: нету'}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;