import React from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagePropsType} from "../../Redux/State";



type DialogsProps = {
    dialogData:Array <DialogPropsType>
    messageData:Array<MessagePropsType>
}

export const Dialogs = (props:DialogsProps) => {

    let dialogElement = props.dialogData.map((d:DialogPropsType) =>  <Dialog {...d}/>)
    let messageElement = props.messageData.map((m:MessagePropsType) =>  <Message message={m.message} id={m.id}/>)

    return <div className={s.dialogs}>
        <div className={s.dialogs_item}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            { messageElement }
        </div>
    </div>
}