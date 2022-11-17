import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import exp from "constants";

type DialogPropsType = {
    id: number,
    name: string
}

export const Dialog  = (props: DialogPropsType) => {
   const path = "/dialog/" + props.id
   return <div className={s.dialog +" " + s.active}>
       <NavLink to = {path}  className={s.dialog}> {props.name}</NavLink>
   </div>
}


type MessagePropsType = {
    message: string
}

export const Message = (props:MessagePropsType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

export const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogs_item}>

            <Dialog name = "Olga" id={1}/>
            <Dialog name = "Vera" id={2}/>
            <Dialog name = "Inga" id={3}/>
            <Dialog name = "Anna" id={4}/>
            <Dialog name = "Oleg" id={5}/>
            <Dialog name = "Andrey" id={6}/>

        </div>
        <div className={s.messages}>
            <Message message='Hello'/ >
            <Message message='How are you doing?' / >
            <Message message='Who are you?' / >
        </div>
    </div>
}