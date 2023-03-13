import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MypostsContainer";
import {mapStateToPropsType} from "./ProfileContainer";


export const Profile = (props:mapStateToPropsType) => {
    return <div>
        <ProfileInfo {...props}/>
        <MyPostsContainer
        />
    </div>
}