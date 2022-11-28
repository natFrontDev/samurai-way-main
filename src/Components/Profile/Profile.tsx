import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../Redux/State";


export type PostDataProps= {
    postData: Array<PostPropsType>
}


export const Profile = (props:PostDataProps)=> {
    return <div>
        <ProfileInfo/>
        <MyPosts {...props} />
    </div>
}