import React, {ChangeEvent, useRef} from "react";
import s from "./Myposts.module.css"
import {Post, } from "./Post/Post";
import {PostDataProps} from "../Profile";
import { PostPropsType} from "../../../Redux/State";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/Profile-reducer";





export const MyPosts = (props:PostDataProps)=> {
    let postElement = props.profilePage.postData.map ((p:PostPropsType) => <Post key={p.id} {...p}/>)


    let addPost = () => {
        props.dispatch (addPostAC())
    }



    let updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newPost = e.currentTarget.value
            props.dispatch(updateNewPostTextAC(newPost))
        }
    }


    return <div >
        <h2> My posts </h2>
        <div className={ s.myPost}>
            <div><textarea  value={props.profilePage.newPostText} onChange={updateNewPostText}> </textarea></div>
            <div> <button onClick={addPost}> Add post </button> </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}
