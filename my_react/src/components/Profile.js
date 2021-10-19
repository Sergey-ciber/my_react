import React from 'react';
import style from './Profile.module.css'

const Profile = () => {

    return(
        <div className={style.content}>
            <div>
                <img
                    src={"https://sun9-23.userapi.com/impf/Q2FejchAxdNdxeedvl7pfVOGg0EtO1SzzoSd7g/IcN6vTD4SMc.jpg?size=510x200&quality=96&crop=0,0,1067,418&sign=360c225342f2d2d5dfcc0932898b0b04&type=vote"}/>
            </div>
            <div>Ava + description</div>
            <div>
                My post
                <div>New post</div>
                <div className={style.posts}>
                    <div className={style.item}>Post 1</div>
                    <div className={style.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;