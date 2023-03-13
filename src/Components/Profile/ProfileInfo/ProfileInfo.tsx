import React, {FC} from "react";
import s from "./ProfileInfo.module.css"
import {mapStateToPropsType} from "../ProfileContainer";
import {Preloader} from "../../Common/Preloader/Preloader";
import searchForJob from "../../../images/png-clipart-check-mark-tax-refund-life-insurance-mortgage-loan-green-check-marks-angle-company.png"
import occupied from "../../../images/pngtree-red-cross.png"


export const ProfileInfo = (props:mapStateToPropsType) => {
    if (!props.userProfile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={s.background} src={"https://www.poland.travel/images/ru-RU/Miasta/Gdanskmal.jpg"}/>
        </div>
        <div className={s.info}>
            <img className={s.avatar} src={props.userProfile.photos.large!}/>
            <div className={s.description}>
                <h1>
                    {props.userProfile.fullName}
                </h1>
                <div>MY CONTACTS:</div>
                <div>{props.userProfile.contacts.github}</div>
                <div>{props.userProfile.contacts.vk}</div>
                <div>{props.userProfile.contacts.facebook}</div>
                <div>{props.userProfile.contacts.instagram}</div>
                <div>{props.userProfile.contacts.twitter}</div>
                <div>{props.userProfile.contacts.website}</div>
                <div>{props.userProfile.contacts.youtube}</div>
                <div>{props.userProfile.contacts.mainLink}</div>
            </div>
        </div>
        {props.userProfile.lookingForAJob ? <div>
                <img style ={{background:"transparent",maxWidth:"100px"}} src={searchForJob}/>
                <div>{props.userProfile.lookingForAJobDescription}</div>
            </div>
            : <img src={occupied}/>}
    </div>
}