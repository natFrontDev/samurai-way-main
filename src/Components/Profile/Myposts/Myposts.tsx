import React from "react";
import s from "./Myposts.module.css"
import {Post, } from "./Post/Post";
import {PostDataProps} from "../Profile";
import {PostPropsType} from "../../../Redux/State";





export const MyPosts = (props:PostDataProps)=> {
    let postElement = props.postData.map ((p:PostPropsType) => <Post key={p.id} {...p}/>)

    return <div >
        <h2> My posts </h2>
        <div className={ s.myPost}>
            <div><textarea> </textarea></div>
            <div> <button> Add post </button> </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}
