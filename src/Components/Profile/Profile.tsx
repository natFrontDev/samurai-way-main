import React from "react";
import {MyPosts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../Redux/State";


export type PostDataProps= {
    postData: Array<PostPropsType>,
    addPost: () => void,
    newPostText: string,
    updateNewPostText:(newText: string) => void
}


export const Profile = (props:PostDataProps)=> {
    return <div>
        <ProfileInfo />
        <MyPosts {...props} />
    </div>
}