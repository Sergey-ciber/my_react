import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let onPostChange = (text) => {
                        store.dispatch(
                            updateNewPostActionCreator(text)
                        )
                    }

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    return <MyPosts postsData={store.getState().profilePage} onPostChange={onPostChange}
                                    addPost={addPost}/>

                }
            }
        </StoreContext.Consumer>
    )

}
export default MyPostsContainer;