import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

import './Dialogs.scss';

function Dialogs(props: any) {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d: { name: string, id: number }) => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map((m: { message: string, id: number }) => <Message text={m.message} key={m.id} />);
  let newMessageElement: any = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e: any) => {
    props.updateNewMessageBody(e.target.value);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className="dialogs">
      <h3 className="dialogs__title">Dialogs</h3>
      <div className="dialogs__wrapper">
        <div className="dialogs__items">
          {dialogsElements}
        </div>
        <div className="dialogs__messages">
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                onChange={onNewMessageChange}
                ref={newMessageElement}
                value={props.dialogsPage.newMessageBody}
                placeholder="Enter you message" />
            </div>
            <div>
              <button className="btn" onClick={() => { onSendMessageClick() }}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;