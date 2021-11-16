const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, post: 'Hello', likeCount: 3},
        {id: 2, post: 'It`s my first post', likeCount: 5},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                post: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});