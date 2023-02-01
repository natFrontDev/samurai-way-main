import React, {ChangeEvent, useRef} from "react";
import s from "./Myposts.module.css"
import {Post, } from "./Post/Post";
import { PostPropsType} from "../../../Redux/Profile-reducer";
import {MyPostsPagePropsType} from "./MypostsContainer";



//
// export type MyPostsDataProps= {
//     profilePage: {postData: Array<PostPropsType>,
//         newPostText: string},
//     addPost: ( ) => void,
//     updateNewPostText: (newPost:string) => void
// }
//
//

export const MyPosts = (props:MyPostsPagePropsType)=> {
    let postElement = props.profilePage.postData.map ((p:PostPropsType) => <Post key={p.id} {...p}/>)


    let addPost = () => {
        props.addPost()
    }



    let updateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newPost = e.currentTarget.value
            props.updateNewPostText(newPost)
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
