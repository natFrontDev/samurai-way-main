import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../Redux/Dialogs-reducer";





export const Dialog  = (props: DialogPropsType) => {
   const path = "/dialogs/" + props.id
   return <div >
       <NavLink to = {path} className={s.dialog} activeClassName={s.active}> {props.name}</NavLink>
   </div>
}




