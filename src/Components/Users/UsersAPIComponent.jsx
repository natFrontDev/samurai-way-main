import React from "react";
import axios from "axios";
import {Users} from "./UsersFC";
import {Preloader} from "../Common/Preloader/Preloader";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.isToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.userPage.currentPage}&count=${this.props.userPage.pageSize}`)
            .then(response => {
                this.props.isToggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.isToggleFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userPage.pageSize}`)
            .then(response => {
                this.props.isToggleFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return <>
            {this.props.userPage.isFetching?<Preloader/>:null}

            <Users totalUserCount={this.props.userPage.totalUserCount}
                   pageSize={this.props.userPage.pageSize}
                   currentPage={this.props.userPage.currentPage}
                   onPageChanged={this.onPageChanged}
                   userData={this.props.userPage.userData}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}

            />
        </>

    }
}