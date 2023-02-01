import {
    addTextAC, DialogPageType,
    updateNewMessageTextAC,
} from "../../Redux/Dialogs-reducer";
import {ActionDispatchTypes, StatePropsType} from "../../Redux/Redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



export type DialogsPagePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    dialogPage: DialogPageType
}

type mapDispatchToPropsType = {
    updateNewMessageText: (newText:string) => void,
    addText: () => void
}
const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {dialogPage: state.dialogPage}
}


const mapDispatchToProps = (dispatch: (action: ActionDispatchTypes)=> void): mapDispatchToPropsType => {
    debugger
   return {
       updateNewMessageText: (newText:string) => {
           debugger
           dispatch(updateNewMessageTextAC(newText))},
       addText: () => {
           debugger
           dispatch(addTextAC())}
}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)