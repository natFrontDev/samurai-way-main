import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {addTextType, updateNewMessageTextType} from "./Dialogs-reducer";
import profileReducer, {addPostType, updateNewPostTextType} from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";

export type ActionDispatchTypes = addTextType | addPostType | updateNewMessageTextType | updateNewPostTextType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage:dialogsReducer,
    siteBar: sidebarReducer}
)

export let store = createStore(reducers)

export type StorePropsType =  typeof store