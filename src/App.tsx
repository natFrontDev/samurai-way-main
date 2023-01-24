import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {StorePropsType} from "./Redux/Redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";



export type StoreType={
    store:StorePropsType
}

export const App =(props:any) => {

    // let state = props.store.getState()



  return (
          <div className="App_wrapper">
              <Header/>
              <Navbar
                  // {...state.sitebar}
              />
              <div className="App_wrapper_content">
                 <Route path={"/dialogs"} render = {()=> <DialogsContainer
                     // dialogPage = {state.dialogPage} dispatch={props.store.dispatch.bind(props.store)}
                                                                   />}/>
                 <Route path={"/profile"} render = {()=> <Profile
                     // profilePage={state.profilePage}
                     // dispatch={props.store.dispatch.bind(props.store)}
                                                                  />}/>
                 <Route path={"/news"} render = {()=> <News/>}/>
                 <Route path={"/music"} render = {()=> <Music/>}/>
                 <Route path={"/settings"} render = {()=> <Settings/>}/>
              </div>
          </div>
  );
}

