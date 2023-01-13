import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store = {store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe (rerenderEntireTree)

