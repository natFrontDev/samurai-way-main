import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MypostsContainer";

//
// export type ProfileDataProps= {
//     profilePage: {postData: Array<PostPropsType>,
//     newPostText: string},
//     dispatch: (action: ActionDispatchTypes) => void
// }


export const Profile = ( ) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer
           //{...props}
        />
    </div>
}