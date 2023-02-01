import {ActionDispatchTypes} from "./Redux-store";


export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



export type addPostType = {
    type: typeof ADD_POST
}

export type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newPost:string
}

export const addPostAC = ():addPostType => ({type:ADD_POST})

export const updateNewPostTextAC = (newPost: string):updateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: newPost
})


export type PostPropsType = {
    id:number,
    message: string,
    likesCount: number
}

const postData: Array<PostPropsType> = [
    {id:1, message: "How are you doing?", likesCount: 12},
    {id:2, message: "It's my first message!", likesCount: 5},
]


const initialState = {
    postData: postData,
    newPostText: "it-kamasutra.com",
}

export type ProfilePageType =  typeof initialState

const profileReducer = (state:ProfilePageType = initialState,action:ActionDispatchTypes):ProfilePageType => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            stateCopy = {...state, postData:[...state.postData, newPost], newPostText:""}
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            stateCopy = {...state, newPostText:action.newPost}
            return stateCopy
        default:
            return state
    }
}



export default profileReducer

