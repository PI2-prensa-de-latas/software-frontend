import React from 'react';

import ProfileHeader from './../../components/ProfileHeader';
import ProfileScore from './../../components/ProfileScore';
import ProfileFeed from './../../components/ProfileFeed';

import NavBar from './../../components/NavBar';
import WaveHeader from './../../components/WaveHeader';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';

import Loader from 'react-loader-spinner';

import api from './../../services/api';
import styles from "../Promo/style";
import colors from "../../style/colors";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);


class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_loading: true,
            user: "",
            score: "",
            notification: [],
        }
    }

    componentDidMount = async () => {
        await api
            .get(`/user/${USER_ID}`, {
                headers: {Authorization: AuthStr}
            })
            .then(response => this.setState({
                    user: response.data,
                })
            );

        await api
            .post('/score', {user: USER_ID}, {headers: {Authorization: AuthStr}},
            )
            .then(response => this.setState({score: response.data}));

        await api
            .get(`/user/${USER_ID}`,
                {headers: {Authorization: AuthStr}})
            .then(response => this.setState({notification: response.data.notification})).then()

        // if (this.state.user.pic === undefined) {
        //     this.setState({user: {...this.state.user, pic: defaultPic}})
        // }
        this.setState({is_loading: false})
    }

    render() {
        return (
            <>
                <HttpsRedirect>
                    <WaveHeader/>
                    {
                        this.state.is_loading ?
                            <Loader
                                style={styles.loading}
                                type="Grid"
                                color={colors.MidGreen}
                                height={100}
                                width={100}
                            />
                            :
                            <>
                                <ProfileHeader user={this.state.user}/>
                                <ProfileScore score={this.state.score}/>
                                <ProfileFeed notification={this.state.notification}/>
                            </>
                    }
                    <NavBar selected={"PROFILE"}/>
                </HttpsRedirect>
            </>
        )
    }
}

export default NetworkDetector(ProfileScreen);