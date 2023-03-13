import {ActionDispatchTypes} from "./Redux-store";
import {addTextType, updateNewMessageTextType} from "./Dialogs-reducer";


export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

export type addPostType = {
    type: typeof ADD_POST
}

export type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newPost:string
}

export type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: any
}

export type ProfileActionTypes =  addPostType |
    updateNewPostTextType | setUserProfileType

export const addPostAC = ():addPostType => ({type:ADD_POST})

export const updateNewPostTextAC = (newPost: string):updateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: newPost
})

export const setUserProfile = (profile: UserProfileType):setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile:profile
})


export type PostPropsType = {
    id:number,
    message: string,
    likesCount: number
}

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string, vk: string, facebook: string, instagram: string,
        twitter: string, website: string, youtube: string, mainLink: string
    }
    photos: { small: string | null, large: string | null }
} | null

const postData: Array<PostPropsType> = [
    {id:1, message: "How are you doing?", likesCount: 12},
    {id:2, message: "It's my first message!", likesCount: 5},
]

const userProfile: UserProfileType = null

const initialState = {
    postData: postData,
    newPostText: "it-kamasutra.com",
    userProfile: userProfile
}

export type ProfilePageType =  typeof initialState

const profileReducer = (state:ProfilePageType = initialState,action:ProfileActionTypes):ProfilePageType => {
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
        case SET_USER_PROFILE:
            stateCopy = {...state, userProfile:action.profile}
            return stateCopy
        default:
            return state
    }
}



export default profileReducer

