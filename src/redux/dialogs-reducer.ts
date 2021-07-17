const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialtState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Viktor' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Who are you' },
    { id: 3, message: 'Hi v2' },
  ],
  newMessageBody: 'dadsdas'
}

const dialogsReducer = (state: any = initialtState, action: any) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body: string = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
        newMessageBody: '',
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}
export const updateNewMessageBodyCreator = (text: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  }
}
export default dialogsReducer;
