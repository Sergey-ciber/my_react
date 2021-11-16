import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let onMessageChange = (text) => {
        props.store.dispatch(
            updateNewMessageTextActionCreator(text)
        )
    }

    let addMessage = () => {
        props.store.dispatch(
            addMessageActionCreator()
        )
    };

    return (<Dialogs state={props.store.getState().dialogsPage} onMessageChange={onMessageChange} addMessage={addMessage}/>)
}
export default DialogsContainer;