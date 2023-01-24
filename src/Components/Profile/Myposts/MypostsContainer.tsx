import React from "react";
import { ProfileDataProps} from "../Profile";
import {addPostAC,  updateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {MyPosts} from "./Myposts";
import {StoreContext} from "../../../StoreContext";





export const MyPostsContainer = ()=> {


    return <StoreContext.Consumer>
        {(store) => {

            let addPost = () => {
                store.dispatch(addPostAC())
            }

            let updateNewPostText = (newPost: string) => {
                store.dispatch(updateNewPostTextAC(newPost))
            }

            return (
                <MyPosts addPost={addPost} updateNewPostText={updateNewPostText}
                         profilePage={store.getState().profilePage}/>)
        }}
    </StoreContext.Consumer>

}