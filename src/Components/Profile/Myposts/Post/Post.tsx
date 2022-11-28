import React from "react";
import s from "./Post.module.css"
import {PostPropsType} from "../../../../Redux/State";



export const Post = (props:PostPropsType  ) => {
    return <div className={s.item}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK1_fGqbqbwQS6kn7NajMPCTEAfz9K52yxg&usqp=CAU"}/>
        <span> {props.message} </span>
    </div>
}
