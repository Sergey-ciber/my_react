import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post message={'Hello'} likeCounts={'2'}/>
                <Post message={'It`s my first post'} likeCounts={'5'}/>
            </div>
        </div>
    )
}
export default MyPosts;