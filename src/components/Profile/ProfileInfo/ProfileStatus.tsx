import { useState, useEffect } from 'react';
import './ProfileInfo.scss'

function ProfileStatus(props: any) {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e: any) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className="profile-info__status">
      <span className="profile-info__status-span">Статус:
        {!editMode &&
          <div
            className="profile-info__status-text"
            onClick={activateEditMode}>
            {props.status || '-----'}
          </div>
        }
        {editMode &&
          <div>
            <input
              className="profile-info__status-input"
              autoFocus
              type="text"
              onBlur={deActivateEditMode}
              onChange={onStatusChange}
              value={status} />
          </div>}
      </span>
    </div>
  )
}

export default ProfileStatus;