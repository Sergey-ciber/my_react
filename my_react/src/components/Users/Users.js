import React from 'react';
import style from './Users.module.css';
import UserItem from "./UserItem/UserItem";
import * as axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let userItem = this.props.usersPage.users.map(el => {
            return <UserItem key={el.id} id={el.id} followed={el.followed} name={el.name} location={'Moscow'}
                             status={el.status}
                             follow={this.props.follow} unFollow={this.props.unFollow}
                             avaURL={el.photos.small ? el.photos.small : el.photos.large}/>
        })

        return (
            <div className={style.users}>
                <div>
                    {userItem}
                </div>
            </div>
        )
    }
}

// const Users = (props) => {
//
//     let getUsers = () => {
//         if (props.usersPage.users.length === 0) {
//
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     };
//
//     let userItem = props.usersPage.users.map(el => {
//         return <UserItem key={el.id} id={el.id} followed={el.followed} name={el.name} location={'Moscow'}
//                          status={el.status}
//                          follow={props.follow} unFollow={props.unFollow}
//                          avaURL={el.photos.small ? el.photos.small : el.photos.large}/>
//     })
//
//     return (
//         <div className={style.users}>
//             <button onClick={getUsers}>Get users</button>
//             <div>
//                 {userItem}
//             </div>
//         </div>
//     )
// }
export default Users;