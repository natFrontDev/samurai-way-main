import React from "react";

import {addTextAC, DialogPropsType, MessagePropsType, updateNewMessageTextAC} from "../../Redux/Dialogs-reducer";
import {ActionDispatchTypes} from "../../Redux/Redux-store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";




type DialogsContainerProps = {
    dialogPage: {dialogData:Array <DialogPropsType>,
        messageData:Array<MessagePropsType>,
        newMessageText: string},
    dispatch: (action: ActionDispatchTypes) => void
}

export const DialogsContainer = () => {

    return <StoreContext.Consumer>

        { (store) => {
            let addText = () => {
                store.dispatch (addTextAC())
            }

            let updateNewMessageText = (newText:string) => {
                store.dispatch(updateNewMessageTextAC(newText))
            }
            return (
                <Dialogs addText={addText} updateNewMessageText={updateNewMessageText}
                         dialogPage={store.getState().dialogPage}/>)
        }}

    </StoreContext.Consumer>
}
