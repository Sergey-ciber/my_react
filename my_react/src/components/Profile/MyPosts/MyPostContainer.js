import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let onPostChange = (text) => {
        props.store.dispatch(
            updateNewPostActionCreator(text)
        )
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return (<MyPosts postsData={props.store.getState().profilePage} onPostChange={onPostChange} addPost={addPost}/>)

}
export default MyPostsContainer;