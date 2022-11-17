import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Myposts/Myposts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ()=> {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}