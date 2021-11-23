import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let onMessageChange = (text) => {
//                         store.dispatch(
//                             updateNewMessageTextActionCreator(text)
//                         )
//                     }
//
//                     let addMessage = () => {
//                         store.dispatch(
//                             addMessageActionCreator()
//                         )
//                     };
//
//                     return <Dialogs state={store.getState().dialogsPage} onMessageChange={onMessageChange}
//                                     addMessage={addMessage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(
                updateNewMessageTextActionCreator(text)
            )
        },
        addMessage: () => {
            dispatch(
                addMessageActionCreator()
            )
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;