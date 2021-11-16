import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile_reducer";


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

        this.state.profilePage = profileReducer(this.state.profilePage, action);

        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);

        rerenderEntireTree(this.state)
    }
}

window.state = store.state;

export default store;