import {addPostAC, ProfilePageType,  updateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {MyPosts} from "./Myposts";
import {connect} from "react-redux";
import {ActionDispatchTypes, StatePropsType} from "../../../Redux/Redux-store";




export type MyPostsPagePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    updateNewPostText: (newPost:string) => void,
    addPost: () => void
}
const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {profilePage: state.profilePage}
}


const mapDispatchToProps = (dispatch: (action: ActionDispatchTypes)=> void): mapDispatchToPropsType => {
    return {
        updateNewPostText: (newPost:string) => {dispatch(updateNewPostTextAC(newPost))},
        addPost: () => {dispatch(addPostAC())}
    }
}
export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)