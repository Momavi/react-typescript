import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import './Dialogs.scss';

function DialogItem(props: { name: string, id: number }) {
  return (
    <div className="dialog__item active">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

function Message(props: { text: string }) {
  return <div className="dialogs__message">{props.text}</div>
}

function Dialogs(props: any) {

  let dialogsElements = props.state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.state.messages.map((m: any) => <Message text={m.message} />)

  return (
    <div className="dialogs">
      <div className="dialogs__title">Dialogs</div>
      <div className="dialogs__wrapper">
        <div className="dialogs__items">
          {dialogsElements}
        </div>
        <div className="dialogs__messages">
          {messagesElements}
        </div>
      </div>
    </div>

  );
}

export default Dialogs;