import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {StatePropsType} from "../../Redux/Redux-store";
import {SideBarPageType} from "../../Redux/Sidebar-reducer";


export type NavbarPropsType = mapStateToPropsType
type mapStateToPropsType = {
    sideBar: SideBarPageType
}

const mapStateToProps = (state: StatePropsType): mapStateToPropsType => {
    return {sideBar: state.sideBar}
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)