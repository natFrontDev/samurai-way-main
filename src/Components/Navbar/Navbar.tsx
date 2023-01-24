import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsPropsType} from "../../Redux/Sidebar-reducer";
import {StoreContext} from "../../StoreContext";


export type NavbarPropsType =
    { friendsData: Array<FriendsPropsType> }

export const Navbar = () => {
    return <StoreContext.Consumer>

        { (store) => {

            return <nav className={s. Nav}>
            <ul className={s. menu}>
            <li > <NavLink to={'/profile'} activeClassName={s.active} className={s.item}> Profile</NavLink>  </li>
            <li> <NavLink to={'/dialogs'} activeClassName={s.active} className={s.item}> Messages</NavLink></li>
            <li> <NavLink to={"/news"} activeClassName={s.active} className={s.item}> News</NavLink> </li>
            <li> <NavLink to={"/music"} activeClassName={s.active} className={s.item}> Music</NavLink> </li>
            <li> <NavLink to={"/settings"} activeClassName={s.active} className={s.item}> Settings</NavLink> </li>
            <li>
            <ul  className={s.friends}>
            <h1>Friends</h1>
            <div className={s.friendsList}>
        {store.getState().siteBar.friendsData.map((friend: FriendsPropsType) => {
            return (
            <li key={friend.id} className={s.friend} >
            <img src={friend.photo} className={s.photo}/>
            <div> {friend.name}</div>
            </li>)
        })
        }
            </div>
            </ul>
            </li>
            </ul>
            </nav>

        }}
    </StoreContext.Consumer>
}
