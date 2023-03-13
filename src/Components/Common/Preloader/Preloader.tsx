import preloader from "../../../images/preloader.gif";
import React from "react";

export const Preloader = () => {
    return <div style={{backgroundColor: "white" }}>
        <img src={preloader}/>
    </div>
}