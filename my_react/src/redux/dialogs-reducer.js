const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.text};
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessageText
                }],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}
export default dialogsReducer;

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});