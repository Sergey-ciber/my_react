import React from 'react';
import style from './Users.module.css';
import UserItem from "./UserItem/UserItem";
import * as axios from 'axios';


const Users = (props) => {

    let getUsers = () => {
        if (props.usersPage.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    };

    // props.setUsers([
    //     {
    //         id: 1,
    //         followed: true,
    //         fullName: 'Serg',
    //         status: 'Hello world',
    //         location: {city: 'Nizhniy Novgorod', country: 'Russia'},
    //         avaURL: 'https://sun1-30.userapi.com/s/v1/if1/4kMrcR3qVvioPzBu4JgzTKszpzi3NU10eepVDbdplF3nHyymyF8YVwCvlkXoYOxY9Dp2MjzB.jpg?size=400x0&quality=96&crop=110,0,421,421&ava=1'
    //     },
    //     {id: 2, followed: false, fullName: 'Bob', status: 'Hello world', location: {city: 'Moscow', country: 'Russia'}, avaURL:
    //             'https://pm1.narvii.com/6557/e8fc30b982df1a05b6b8d62674f17d580e21b2d5_128.jpg'}
    // ])

    let userItem = props.usersPage.users.map(el => {
        return <UserItem key={el.id} id={el.id} followed={el.followed} name={el.name} location={'Moscow'}
                         status={el.status}
                         follow={props.follow} unFollow={props.unFollow}
                         avaURL={el.photos.small ? el.photos.small : el.photos.large}/>
    })

    return (
        <div className={style.users}>
            <button onClick={getUsers}>Get users</button>
            <div>
                {userItem}
            </div>
        </div>
    )
}
export default Users;