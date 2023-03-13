
import {connect} from "react-redux";
import { StatePropsType} from "../../Redux/Redux-store";
import {
    followUser, isToggleFetching, setCurrentPage, setTotalCount, setUsers, unfollowUser,
    UserPropsType,
    UsersPageType
} from "../../Redux/Users-reducer";
import { UsersAPIComponent} from "./UsersAPIComponent";
import React from "react";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    userPage: UsersPageType,
}

type mapDispatchToPropsType = {
    followUser: (id: number) => void,
    unfollowUser: (id: number) => void,
    setUsers: (users: Array<UserPropsType>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    isToggleFetching: (isFetching:boolean) => void
}


const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {
        userPage: state.usersPage
    }
}

// расширенная запись
// const mapDispatchToProps = (dispatch: (action: UsersDispatchActionType)=> void): mapDispatchToPropsType => {
//     debugger
//     return {
//         followUser: (id) => {
//             dispatch(followUserAC(id))},
//         unfollowUser: (id) => {
//             dispatch(unfollowUserAC(id))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPageNumber) => {dispatch(setCurrentPageAC(currentPageNumber))},
//         setTotalCount: (totalCount:number) => {dispatch(setTotalCountAC(totalCount))},
//         isToggleFetching: (isFetching:boolean) => {dispatch(toggleIsFetchingAC(isFetching))}
//
//     }
// }


export const UsersContainer = connect(mapStateToProps, {followUser, unfollowUser, setUsers,
    setCurrentPage, setTotalCount, isToggleFetching})(UsersAPIComponent)
