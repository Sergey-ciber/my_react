import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;