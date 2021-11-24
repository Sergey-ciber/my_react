import React from 'react';
import style from './UserItem.module.css';

const UserItem = (props) => {

    let avaURL = `url(${props.avaURL})`;

    return (
        <div className={style.userItem}>
            <div className={style.ava} style={{backgroundImage: avaURL}}> </div>
            <div className={style.fullName}>{props.fullName}</div>
            <div className={style.status}>{props.status}</div>
            <div className={style.location}>{props.location}</div>
            <div className={style.button}>
                {props.followed ?
                    <button onClick={() => {props.unFollow(props.id)}}>UnFollowed</button> :
                    <button onClick={() => {props.follow(props.id)}}>Followed</button>}
            </div>
        </div>
    )
}
export default UserItem;