import React from 'react'

import {
    MdMenu
} from "react-icons/md";

import styles from './style'
import defaultPic from './../../assets/images/Pic.png'
import {Link} from "react-router-dom";


export default class ProfileHeader extends React.Component {

    state = {
        user: ''
    };

    componentDidMount = async () => {
        this.setState({user: this.props.user})
    };

    render() {
        console.log(this.state.user.name, 'user');
        return (
            <>
                <div style={styles.container}>
                    {this.state.user.profile_pic_uri !== '' ? (
                        <img style={styles.profilePic}
                            src={this.state.user.profile_pic_uri}
                            alt={""} 
                        />
                    ) : (
                        <img style={styles.profilePic}
                            src={defaultPic}
                            alt={""}
                        />
                    )}
                    <div style={styles.name}>
                        {this.state.user.name}
                        <Link to="/EditProfile">
                            <MdMenu style={styles.editIcon}/>
                        </Link>
                    </div>

                </div>
            </>
        )
    }
}