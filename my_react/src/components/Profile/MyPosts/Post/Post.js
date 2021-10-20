import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={"https://i.pinimg.com/236x/5b/c8/3a/5bc83aa11351e7083824bc529af91244--initial-d-belt.jpg"}/>
            <div className={style.item}>{props.message}</div>
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    )
}
export default Post;