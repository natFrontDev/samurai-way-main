import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagePropsType} from "../../Redux/Dialogs-reducer";
import {DialogsPagePropsType} from "./DialogsContainer";




// type DialogsProps = {
//     dialogPage: {dialogData:Array <DialogPropsType>,
//         messageData:Array<MessagePropsType>,
//         newMessageText: string},
//     addText: () => void,
//     updateNewMessageText: (newText:string) => void
// }


export const Dialogs = (props:DialogsPagePropsType) => {
    debugger

    let dialogElement = props.dialogPage.dialogData.map((d:DialogPropsType) =>  <Dialog {...d}/>)
    let messageElement = props.dialogPage.messageData.map((m:MessagePropsType) =>  <Message message={m.message} id={m.id} key={m.id}/>)



    let addText = () => {
        debugger
        props.addText()
    }

    let updateNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        if (e.currentTarget) {
            const newText = e.currentTarget.value
            props.updateNewMessageText(newText)
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