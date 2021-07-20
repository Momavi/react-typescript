import React from 'react';
import './ProfileInfo.scss'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
          <div onClick={this.activateEditMode}>
            {this.props.status || '-----'}
          </div>}
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus onClick={this.deactivateEditMode} type="text" value={this.state.status} />
          </div>}
      </>
    )
  }
}

export default ProfileStatus;