import React from 'react';
import style from './UserItem.module.css';

const UserItem = (props) => {

    let avaURL = props.avaURL ? `url("${props.avaURL}")` : `url("https://sun9-40.userapi.com/c304613/u181297379/d_dafa9cac.jpg")`

return (
    <div className={style.userItem}>
        <div className={style.ava} style={{backgroundImage: avaURL}}> </div>
        <div className={style.fullName}>{props.name}</div>
        <div className={style.status}>{props.status}</div>
        <div className={style.location}>{props.location}</div>
        <div className={style.button}>
            {props.followed ?
                <button onClick={() => {
                    props.unFollow(props.id)
                }}>UnFollowed</button> :
                <button onClick={() => {
                    props.follow(props.id)
                }}>Followed</button>}
        </div>
    </div>
)
}
export default UserItem;