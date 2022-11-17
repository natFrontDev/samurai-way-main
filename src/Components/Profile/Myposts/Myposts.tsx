import React from "react";
import s from "./Myposts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = ()=> {
    return <div >
        <h2> My posts </h2>
        <div className={ s.myPost}>
            <div><textarea> </textarea></div>
            <div> <button> Add post </button> </div>
        </div>
        <div className={s.posts}>
            <Post message = {"How are you doing?"}/>
            <Post message  = {"It's my first message!"}/>
        </div>
    </div>
}
