import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {AppPropsType} from "./Redux/State";

export const rerenderEntireTree = (state:AppPropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App {...state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
