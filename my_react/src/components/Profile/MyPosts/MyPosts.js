import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postsData.map(el => <Post message={el.post} likeCounts={el.likeCount}/>)

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
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;