import {Users} from "./Users";
import {connect} from "react-redux";
import { StatePropsType} from "../../Redux/Redux-store";
import {
    followUserAC, setUsersAC,
    unfollowUserAC,
    UserPropsType,
    UsersDispatchActionType,
    UsersPageType
} from "../../Redux/Users-reducer";


export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    userPage: UsersPageType
}

type mapDispatchToPropsType = {
    followUser: (id:number) => void,
    unfollowUser: (id:number) => void,
    setUsers: (users:Array<UserPropsType>) => void
}

const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {userPage: state.usersPage}
}


const mapDispatchToProps = (dispatch: (action: UsersDispatchActionType)=> void): mapDispatchToPropsType => {
    return {
        followUser: (id) => {
            dispatch(followUserAC(id))},
        unfollowUser: (id) => {
            dispatch(unfollowUserAC(id))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)