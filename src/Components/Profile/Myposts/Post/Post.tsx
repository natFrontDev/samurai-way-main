import React from "react";
import s from "./Post.module.css"
import {message} from "antd";

export const Post = (props: {message:string} ) => {
    return <div className={s.item}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK1_fGqbqbwQS6kn7NajMPCTEAfz9K52yxg&usqp=CAU"}/>
        <span> {props.message} </span>
    </div>
}
