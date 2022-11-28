import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./Redux/State";



ReactDOM.render(
    <BrowserRouter>
        <App {...state}  />
    </BrowserRouter>,
  document.getElementById('root')
);

export class AppPropsType {
}