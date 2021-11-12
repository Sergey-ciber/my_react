const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let rerenderEntireTree = () => {
};

let store = {

    state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hello', likeCount: 3},
                {id: 2, post: 'It`s my first post', likeCount: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Frodo'},
                {id: 2, name: 'Mary'},
                {id: 3, name: 'Sam'},
                {id: 4, name: 'Bilbo'},
                {id: 5, name: 'Golum'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Good like'},
            ],
            newMessageText: ''
        }
    },

    getState() {
        return (this.state)
    },

    subscribe(observer) {
        rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this.state.profilePage.newPostText = action.text;
            rerenderEntireTree(this.state)
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: this.state.profilePage.posts[this.state.profilePage.posts.length - 1].id + 1,
                post: this.state.profilePage.newPostText,
                likeCount: 0
            }
            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPostText = '';
            rerenderEntireTree(this.state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.state.dialogsPage.newMessageText = action.text;
            rerenderEntireTree(this.state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this.state.dialogsPage.messages[this.state.dialogsPage.messages.length - 1].id + 1,
                message: this.state.dialogsPage.newMessageText
            };
            this.state.dialogsPage.messages.push(newMessage);
            this.state.dialogsPage.newMessageText = '';
            rerenderEntireTree(this.state)
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

window.state = store.state;

export default store;