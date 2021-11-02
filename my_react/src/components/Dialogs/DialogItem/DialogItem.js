import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={style.dialogItem}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;