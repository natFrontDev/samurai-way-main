import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";


export class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
            <div>
                <Profile userProfile = {this.props.userProfile} />
            </div>
        )
    }
}