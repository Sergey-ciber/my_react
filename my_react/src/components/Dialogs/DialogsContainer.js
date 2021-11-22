import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let onMessageChange = (text) => {
                        store.dispatch(
                            updateNewMessageTextActionCreator(text)
                        )
                    }

                    let addMessage = () => {
                       store.dispatch(
                            addMessageActionCreator()
                        )
                    };

                    return <Dialogs state={store.getState().dialogsPage} onMessageChange={onMessageChange}
                                     addMessage={addMessage}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;