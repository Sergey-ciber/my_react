import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let onPostChange = (text) => {
//                         store.dispatch(
//                             updateNewPostActionCreator(text)
//                         )
//                     }
//
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     return <MyPosts postsData={store.getState().profilePage} onPostChange={onPostChange}
//                                     addPost={addPost}/>
//
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onPostChange: (text) => {
            dispatch(
                updateNewPostActionCreator(text)
            )
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;