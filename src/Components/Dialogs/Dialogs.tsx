import React, {ChangeEvent, useRef} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";
import {

    ActionDispatchTypes,
    DialogPropsType,
    MessagePropsType,
} from "../../Redux/State";
import {addTextAC, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";




type DialogsProps = {
    dialogPage: {dialogData:Array <DialogPropsType>,
        messageData:Array<MessagePropsType>,
        newMessageText: string},
    dispatch: (action: ActionDispatchTypes) => void
}

export const Dialogs = (props:DialogsProps) => {

    let dialogElement = props.dialogPage.dialogData.map((d:DialogPropsType) =>  <Dialog {...d}/>)
    let messageElement = props.dialogPage.messageData.map((m:MessagePropsType) =>  <Message message={m.message} id={m.id}/>)



    let addText = () => {
        props.dispatch (addTextAC())
    }

    let updateNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newText = e.currentTarget.value
            props.dispatch(updateNewMessageTextAC(newText))
        }
    }


    return <div className={s.dialogs}>
        <div className={s.dialogs_item}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            { messageElement }
            <textarea  value={props.dialogPage.newMessageText} onChange={updateNewMessageText}></textarea>
            <button onClick={addText}> Send </button>
        </div>

    </div>
}