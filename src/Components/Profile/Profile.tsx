import React from "react";
import {MyPosts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionDispatchTypes,

    PostPropsType
} from "../../Redux/State";


export type PostDataProps= {
    profilePage: {postData: Array<PostPropsType>,
    newPostText: string},
    dispatch: (action: ActionDispatchTypes) => void
}


export const Profile = (props:PostDataProps)=> {
    return <div>
        <ProfileInfo />
        <MyPosts {...props} />
    </div>
}