import React, {ChangeEvent, useRef} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagePropsType} from "../../Redux/State";
import {Route} from "react-router-dom";



type DialogsProps = {
    dialogData:Array <DialogPropsType>
    messageData:Array<MessagePropsType>
    newMessageText: string,
    addText: () => void
    updateNewMessageText:(newText: string) => void
}

export const Dialogs = (props:DialogsProps) => {

    let dialogElement = props.dialogData.map((d:DialogPropsType) =>  <Dialog {...d}/>)
    let messageElement = props.messageData.map((m:MessagePropsType) =>  <Message message={m.message} id={m.id}/>)



    let addText = () => {
        props.addText()
    }

    let updateNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.updateNewMessageText(e.currentTarget.value)
        }
    }


    return <div className={s.dialogs}>
        <div className={s.dialogs_item}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            { messageElement }
        </div>
        <textarea  value={props.newMessageText} onChange={updateNewMessageText}></textarea>
        <button onClick={addText}>+</button>
    </div>
}