import {rerenderEntireTree} from "../render";

let state = {
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
}

window.state = state;

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state)
};

export let addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state)
};

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state)
};

export default state;