import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import Login from './Login';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps ),
  withRouter,
)(Login);