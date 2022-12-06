import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {rerenderEntireTree} from "./Render";
import {state} from "./Redux/State";



rerenderEntireTree(state)

