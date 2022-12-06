import React, {useRef} from "react";
import s from "./Myposts.module.css"
import {Post, } from "./Post/Post";
import {PostDataProps} from "../Profile";
import {PostPropsType} from "../../../Redux/State";





export const MyPosts = (props:PostDataProps)=> {
    let postElement = props.postData.map ((p:PostPropsType) => <Post key={p.id} {...p}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }

    }

    return <div >
        <h2> My posts </h2>
        <div className={ s.myPost}>
            <div><textarea ref={newPostElement}> </textarea></div>
            <div> <button onClick={addPost}> Add post </button> </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}
