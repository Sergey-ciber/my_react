import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, post: 'Hello', likeCount: 3},
        {id: 2, post: 'It`s my first post', likeCount: 5},
    ];

    return (
        <div className={style.MyPost}>
            My post
            <div>
                <textarea> </textarea>
                <div className={style.inputBlock}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postsData[0].post} likeCounts={postsData[0].likeCount}/>
                <Post message={postsData[1].post} likeCounts={postsData[1].likeCount}/>
            </div>
        </div>
    )
}
export default MyPosts;