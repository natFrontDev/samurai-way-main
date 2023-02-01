import {combineReducers, createStore} from "redux";
import dialogsReducer, {addTextType, updateNewMessageTextType} from "./Dialogs-reducer";
import profileReducer, {addPostType, updateNewPostTextType} from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";

export type ActionDispatchTypes = addTextType | addPostType | updateNewMessageTextType | updateNewPostTextType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage:dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer}
)

export let store = createStore(reducers)

export type StorePropsType =  typeof store
export type StatePropsType =  ReturnType <typeof reducers>