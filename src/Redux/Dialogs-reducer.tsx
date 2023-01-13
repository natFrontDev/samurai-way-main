import {
    ActionDispatchTypes,
    addTextType,
    DialogPropsType,
    MessagePropsType, PostPropsType, updateNewMessageTextType,

} from "./State";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_TEXT= "ADD-TEXT"



// export type addPostType = {
//     type:"ADD-POST"
// }
//
// export type updateNewPostTextType = {
//     type: "UPDATE-NEW-POST-TEXT",
//     newPost:string
// }

const dialogsReducer = (state:{dialogData:Array <DialogPropsType>, messageData:Array<MessagePropsType>,
    newMessageText: string },action:ActionDispatchTypes)=> {

    switch (action.type) {
        case "ADD-TEXT":
            const newMessage:MessagePropsType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }
            state.messageData.push(newMessage)
            state.newMessageText = " "
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export default dialogsReducer


export const addTextAC = ():addTextType => ({type: ADD_TEXT})

export const updateNewMessageTextAC = (newText: string):updateNewMessageTextType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
})

