import React, {ChangeEvent, useRef} from "react";
import s from "./Myposts.module.css"
import {Post, } from "./Post/Post";
import {PostDataProps} from "../Profile";
import {PostPropsType} from "../../../Redux/State";





export const MyPosts = (props:PostDataProps)=> {
    let postElement = props.postData.map ((p:PostPropsType) => <Post key={p.id} {...p}/>)


    let addPost = () => {
        props.addPost()}



    let updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.updateNewPostText(e.currentTarget.value)
        }
    }


    return <div >
        <h2> My posts </h2>
        <div className={ s.myPost}>
            <div><textarea  value={props.newPostText} onChange={updateNewPostText}> </textarea></div>
            <div> <button onClick={addPost}> Add post </button> </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}
