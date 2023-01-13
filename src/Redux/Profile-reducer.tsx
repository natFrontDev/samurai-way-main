import {ActionDispatchTypes, addPostType, PostPropsType, updateNewPostTextType} from "./State";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



// export type addPostType = {
//     type:"ADD-POST"
// }
//
// export type updateNewPostTextType = {
//     type: "UPDATE-NEW-POST-TEXT",
//     newPost:string
// }

const profileReducer = (state:{postData: Array<PostPropsType>,  newPostText: string},action:ActionDispatchTypes)=> {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = " "
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newPost
            return state
        default:
            return state
    }
}



export default profileReducer

export const addPostAC = ():addPostType => ({type:ADD_POST})

export const updateNewPostTextAC = (newPost: string):updateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: newPost
})
