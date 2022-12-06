import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../Redux/State";




export const Dialog  = (props: DialogPropsType) => {
   const path = "/dialogs/" + props.id
   return <div className={s.dialog +" " + s.active}>
       <NavLink to = {path}  className={s.dialog}> {props.name}</NavLink>
   </div>
}




