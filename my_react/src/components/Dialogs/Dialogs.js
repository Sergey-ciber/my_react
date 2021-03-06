import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)

    let messagesElements = props.state.messages.map(el => <Message message={el.message} key={el.id}/>)


    let onMessageChange = (e) => {
        props.onMessageChange(e.target.value)
    }

    let addMessage = () => {
        props.addMessage()
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
                <input onChange={onMessageChange} value={props.state.newMessageText}/>
                <button onClick={addMessage}>Go</button>
            </div>
        </div>
    )
}
export default Dialogs;