import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.postsData.posts.map(el => <Post message={el.post} likeCounts={el.likeCount}/>)


    let onPostChange = (e) => {
        props.dispatch(
            updateNewPostActionCreator(e.target.value)
        )
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={style.MyPost}>
            My post
            <div>
                <textarea onChange={onPostChange} value={props.postsData.newPostText}/>
                <div className={style.inputBlock}>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;