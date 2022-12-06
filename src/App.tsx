import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {AppPropsType} from "./Redux/State";




export const App = (props:AppPropsType) => {
  return (
          <div className="App_wrapper">
              <Header/>
              <Navbar {...props.siteBar} />
              <div className="App_wrapper_content">
                 <Route path={"/dialogs"} render = {()=> <Dialogs {...props.dialogPage}/>}/>
                 <Route path={"/profile"} render = {()=> <Profile {...props.profilePage}/>}/>
                 <Route path={"/news"} render = {()=> <News/>}/>
                 <Route path={"/music"} render = {()=> <Music/>}/>
                 <Route path={"/settings"} render = {()=> <Settings/>}/>
              </div>
          </div>
  );
}

