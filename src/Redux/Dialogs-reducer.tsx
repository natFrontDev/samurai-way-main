import {ActionDispatchTypes} from "./Redux-store";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_TEXT= "ADD-TEXT"

export type  addTextType = {
    type: typeof ADD_TEXT
}
export type updateNewMessageTextType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    newText: string
}

export type DialogPropsType = {
    id: number
    name: string
}

const dialogData:Array <DialogPropsType> = [
    {name: "Olga", id: 1},
    {name: "Vera", id: 2},
    {name: "Inga", id: 3},
    {name: "Anna", id: 4},
    {name: "Vladimir", id: 5},
]

export type MessagePropsType = {
    message: string
    id:number
}

const messageData: Array<MessagePropsType> = [
    {message: 'Hello', id: 1},
    {message: 'How are you doing?', id: 2},
    {message: 'Who are you?', id: 3},
    {message: "'Yo'", id: 4},
    {message: "'Hello'", id: 5},
]

const initialState = {
    dialogData: dialogData,
    messageData: messageData,
    newMessageText: "hello",
}

export type DialogPageType = typeof initialState
const dialogsReducer = (state: DialogPageType = initialState,action:ActionDispatchTypes): DialogPageType=> {
debugger
    let stateCopy;
    switch (action.type) {
        case ADD_TEXT:
            const newMessage:MessagePropsType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }
            stateCopy = {...state, messageData: [...state.messageData, newMessage], newMessageText:" " }
            return  stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
             stateCopy= {...state, newMessageText:action.newText}
            return stateCopy
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

