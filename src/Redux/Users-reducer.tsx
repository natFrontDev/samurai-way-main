import {ActionDispatchTypes} from "./Redux-store";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

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

export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPageNumber: number
}

export type setTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount:  number
}

export type isToggleFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type UsersDispatchActionType = followUserType | unfollowUserType |
    setUsersType | setCurrentPageType | setTotalCountType | isToggleFetchingType

export const followUser = (id:number):followUserType => ({
    userId: id,
    type: FOLLOW})

export const unfollowUser = (id:number):unfollowUserType => ({
    userId: id,
    type: UNFOLLOW})

export const setUsers = (users:Array<UserPropsType>):setUsersType => ({
    newUsers: users,
    type: SET_USERS})

export const setCurrentPage = (currentPageNumber: number):setCurrentPageType=> ({
    type: SET_CURRENT_PAGE,
    currentPageNumber: currentPageNumber
})
export const setTotalCount = (totalCount: number):setTotalCountType=> ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
})

export const isToggleFetching = (isFetching:boolean):isToggleFetchingType=> ({
    type: TOGGLE_IS_FETCHING,
    isFetching:isFetching
})

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
    userData: usersData,
    pageSize:10,
    totalUserCount:20,
    currentPage:1,
    isFetching:true
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
            copyState = {...state, userData: action.newUsers
                    }
            return copyState
        case SET_CURRENT_PAGE:
            debugger
            copyState = {...state, currentPage: action.currentPageNumber
            }
            return copyState
        case SET_TOTAL_COUNT:
            copyState = {...state, totalUserCount: action.totalCount
            }
            return copyState
        case TOGGLE_IS_FETCHING:
            copyState = {...state, isFetching: action.isFetching
            }
            return copyState
        default:
            return state
    }
}

export default usersReducer





