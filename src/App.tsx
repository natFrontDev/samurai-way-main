import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {News} from "./Components/News/News";
import {StorePropsType} from "./Redux/Redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileAPIComponent} from "./Components/Profile/ProfileAPIComponent";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";



export type StoreType={
    store:StorePropsType
}

export const App =(props:any) => {

    // let state = props.store.getState()



  return (
          <div className="App_wrapper">
              <Header/>
              <NavbarContainer
                  // {...state.sitebar}
              />
              <div className="App_wrapper_content">
                 <Route path={"/dialogs"} render = {()=> <DialogsContainer
                     // dialogPage = {state.dialogPage} dispatch={props.store.dispatch.bind(props.store)}
                                                                   />}/>
                 <Route path={"/profile/:userId?"} render = {()=> <ProfileContainer
                     // profilePage={state.profilePage}
                     // dispatch={props.store.dispatch.bind(props.store)}
                                                                  />}/>
                 <Route path={"/news"} render = {()=> <News/>}/>
                 <Route path={"/music"} render = {()=> <Music/>}/>
                 <Route path={"/settings"} render = {()=> <Settings/>}/>
                 <Route path={"/users"} render = {()=> <UsersContainer/>}/>
              </div>
          </div>
  );
}

