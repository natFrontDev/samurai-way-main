import {ActionDispatchTypes} from "./Redux-store";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type  followUserType = {
    userId: number
    type: typeof FOLLOW
}
export type unfollowUserType = {
    type: typeof UNFOLLOW
    userId: number
}

export type setUsersType = {
    type: typeof SET_USERS
    newUsers: Array<UserPropsType>
}
export type UsersDispatchActionType = followUserType | unfollowUserType | setUsersType

export const followUserAC = (id:number):followUserType => ({
    userId: id,
    type: FOLLOW})

export const unfollowUserAC = (id:number):unfollowUserType => ({
    userId: id,
    type: UNFOLLOW})

export const setUsersAC = (users:Array<UserPropsType>):setUsersType => ({
    newUsers: users,
    type: SET_USERS})



export type UserPropsType = {
    id: number,
    name: string,
    followed: boolean,
    status: string|null
    photos:  {small:string, large:string }
    location: {city: string, country: string}
}

const usersData: Array<UserPropsType> = []

const initialState = {
    userData: usersData
}

export type UsersPageType = typeof initialState

const usersReducer = (state: UsersPageType = initialState,action:UsersDispatchActionType): UsersPageType=> {
    let copyState
    switch (action.type) {
        case FOLLOW:
        copyState = {...state, userData: state.userData.map((i)=> {
            if (i.id === action.userId) {
            return ({...i,followed:true})
            } else
            {return i}})
        }
        return copyState
        case UNFOLLOW:
            copyState = {...state, userData: state.userData.map((i)=> {
                    if (i.id === action.userId) {
                        return ({...i,followed:false})
                    } else
                    {return i}})
            }
            return copyState
        case SET_USERS:
            copyState = {...state, userData: [...state.userData,...action.newUsers]
                    }
            return copyState
        default:
            return state
    }
}

export default usersReducer





