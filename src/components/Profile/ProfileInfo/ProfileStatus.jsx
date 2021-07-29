import { useState, useEffect } from 'react';
import './ProfileInfo.scss'

function ProfileStatus(props) {

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

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className="profile-info__status">
      <span>Статус:
        {!editMode &&
          <div
            onClick={activateEditMode}>
            {props.status || '-----'}
          </div>
        }
        {editMode &&
          <div>
            <input
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