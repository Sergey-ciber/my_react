let rerenderEntireTree = () => {};

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

    updateNewPostText(text) {
        this.state.profilePage.newPostText = text;
        rerenderEntireTree(this.state)
    },

    addPost() {
        let newPost = {
            id: 3,
            post: this.state.profilePage.newPostText,
            likeCount: 0
        }
        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostText = '';
        rerenderEntireTree(this.state)
    },

    updateNewMessageText(text) {
        this.state.dialogsPage.newMessageText = text;
        rerenderEntireTree(this.state)
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this.state.dialogsPage.newMessageText
        };
        this.state.dialogsPage.messages.push(newMessage);
        this.state.dialogsPage.newMessageText = '';
        rerenderEntireTree(this.state)
    },

    subscribe(observer) {
        rerenderEntireTree = observer;
    }
}

window.state = store.state;

export default store;