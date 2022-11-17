import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";



export const Navbar = () => {
    return <nav className={s. Nav}>
        <ul className={s. menu}>
            <li > <NavLink to={'/profile'} activeClassName={s.active} className={s.item}> Profile</NavLink>  </li>
            <li> <NavLink to={'/dialogs'} activeClassName={s.active} className={s.item}> Messages</NavLink></li>
            <li> <NavLink to={"/news"} activeClassName={s.active} className={s.item}> News</NavLink> </li>
            <li> <NavLink to={"/music"} activeClassName={s.active} className={s.item}> Music</NavLink> </li>
            <li> <NavLink to={"/settings"} activeClassName={s.active} className={s.item}> Settings</NavLink> </li>
        </ul>
    </nav>
}
