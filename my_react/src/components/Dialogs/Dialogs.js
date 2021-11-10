import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>)

    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)

    let messageText = React.createRef();

    let onMessageChange = () => {
        props.dispatch(
            updateNewMessageTextActionCreator(messageText.current.value)
        )
    }

    let addMessage = () => {
        props.dispatch(
            addMessageActionCreator()
        )
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.inputBlock}>
                <input ref={messageText} onChange={onMessageChange} value={props.state.newMessageText}/>
                <button onClick={addMessage}>Go</button>
            </div>
        </div>
    )
}
export default Dialogs;