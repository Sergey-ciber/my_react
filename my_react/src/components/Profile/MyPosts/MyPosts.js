import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postsData.posts.map(el => <Post message={el.post} likeCounts={el.likeCount}/>)

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={style.MyPost}>
            My post
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.postsData.newPostText}/>
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