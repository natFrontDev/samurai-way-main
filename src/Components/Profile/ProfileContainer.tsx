import {connect} from "react-redux";
import {ProfileAPIComponent} from "./ProfileAPIComponent";
import {setUserProfile, UserProfileType} from "../../Redux/Profile-reducer";
import {StatePropsType} from "../../Redux/Redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


export type PathParamsType = {
    userId:string
}
/*описывает пропсы из WithRouter*/

export type mapStateToPropsType = {
  userProfile: UserProfileType
}

export type mapDispatchToPropsType = {
    setUserProfile: (profile:UserProfileType) => void
}

export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType

export type ProfileType = RouteComponentProps<PathParamsType>&OwnPropsType
/*описали общий тип, но пока не используем*/


let mapStateToProps = (state:StatePropsType):mapStateToPropsType => ({
    userProfile: state.profilePage.userProfile
})

let WithURLDataContainerComponent = withRouter(ProfileAPIComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)


