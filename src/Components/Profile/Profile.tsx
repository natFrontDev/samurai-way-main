import React from "react";
import {MyPosts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionDispatchTypes} from "../../Redux/Redux-store";
import {PostPropsType} from "../../Redux/Profile-reducer";
import {MyPostsContainer} from "./Myposts/MypostsContainer";


export type ProfileDataProps= {
    profilePage: {postData: Array<PostPropsType>,
    newPostText: string},
    dispatch: (action: ActionDispatchTypes) => void
}


export const Profile = ( ) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer
           //{...props}
        />
    </div>
}