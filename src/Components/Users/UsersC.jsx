import React from "react";
import axios from "axios";
import userPhoto
    from "../../images/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";


export class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <div>
            {this.props.userPage.userData.map(i =>
                <div key={i.id}>
                    <div>
                        <div><img alt={"user"} src={i.photos.small !== null ? i.photos.small : userPhoto}/></div>
                        <div>{i.followed ? <button onClick={() => this.props.unfollowUser(i.id)}>
                                Follow </button> :
                            <button onClick={() => this.props.followUser(i.id)}>Unfollow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{i.name}</div>
                            <div> {i.status}</div>
                        </div>
                        <div>
                            <div>"i.location.city"</div>
                            <div>"i.location.country"</div>
                        </div>

                    </div>
                </div>
            )}

        </div>


    }
}