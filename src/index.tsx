import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { state, subscribe} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App {...state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe (rerenderEntireTree)

