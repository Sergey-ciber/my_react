import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onPostChange: (text) => {
            dispatch(
                updateNewPostActionCreator(text)
            )
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;