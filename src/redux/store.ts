import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {

	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you', likesCounter: 4 },
				{ id: 2, message: 'Its my first post', likesCounter: 7 },
				{ id: 3, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
				{ id: 4, message: 'Mda kak ze mnogo koda i papok', likesCounter: 104 },
			],
			newPostText: 'GG'
		},
		dialogsPage: {
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
		},
	},
	_callSubscriber() {
		console.log('State changeed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer: any) {
		this._callSubscriber = observer;
	},


	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCounter: 0,
		}
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber();
	},
	updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber();
	},

	sendMessage() {
		let body: string = this._state.dialogsPage.newMessageBody;
		this._state.dialogsPage.messages.push({ id: 5, message: body });
		this._state.dialogsPage.newMessageBody = '';
		this._callSubscriber();
	},
	updateNewMessageBody(body: string) {
		this._state.dialogsPage.newMessageBody = body;
		this._callSubscriber();
	},

	dispatch(action: any) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber();
	},
}





export default store;