import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://sun9-23.userapi.com/impf/Q2FejchAxdNdxeedvl7pfVOGg0EtO1SzzoSd7g/IcN6vTD4SMc.jpg?size=510x200&quality=96&crop=0,0,1067,418&sign=360c225342f2d2d5dfcc0932898b0b04&type=vote"}
                    alt={''}/>
            </div>
            <div className={style.descriptionBlock}>Ava + description</div>
        </div>
    )
}
export default ProfileInfo;