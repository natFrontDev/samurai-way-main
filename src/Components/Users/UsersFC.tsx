import s from "./Users.module.css";
import userPhoto
    from "../../images/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";
import React from "react";
import {UsersPageType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";

type UserPropsType = UsersPageType & UserTaskType

type UserTaskType = {
    onPageChanged: (pageNumber:number) => void,
    followUser: (id: number) => void,
    unfollowUser: (id: number) => void
}

export const Users = (props: UserPropsType) => {
    debugger

    let pagesCount = Math.ceil(props.totalUserCount/props.pageSize)
    let pages = []

    for (let i=1;i<=pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>

            {pages.map(p => <span className={props.currentPage === p? s.selectedPage:""}
                                  onClick={
                (e) => props.onPageChanged(p)}>{p}</span>)}
        </div>
        {props.userData.map(i =>
            <div key={i.id}>
                <div>
                    <div><NavLink to={'/profile/'+i.id}>
                        <img alt={"user"} src={i.photos.small !== null ? i.photos.small: userPhoto}/>
                    </NavLink>
                    </div>
                    <div>{i.followed ? <button onClick={() => props.unfollowUser(i.id)}>
                            Follow </button> :
                        <button onClick={() => props.followUser(i.id)}>Unfollow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{i.name}</div>
                        <div> {i.status}</div>
                    </div>
                    <div>
                        <div>"i.location.city"</div>
                        <div>"i.location.country"</div>
                    </div>

                </div>
            </div>
        )}

    </div>

}