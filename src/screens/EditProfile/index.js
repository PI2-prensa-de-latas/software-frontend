import React from 'react';
import EditProfile from './../../components/EditProfile';

import Header from '../../components/Header';
import colors from "../../style/colors";
import api from "../../services/api";
import Loader from "react-loader-spinner";
import styles from "../Promo/style";
import HttpsRedirect from 'react-https-redirect';

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);


export default class EditProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            is_loading: true,
        }
    }

    componentDidMount = async () => {
        await api
            .get(`/user/${USER_ID}`,
                {headers: {Authorization: AuthStr}})
            .then(response => this.setState({user: response.data}));

        this.setState({is_loading: false})
    }

    render() {
        return (
            <>
                <HttpsRedirect>
                    <Header link={"/Start"} title={"Editar Perfil"} background={colors.MidGreen} fill={colors.White}/>
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
                            <EditProfile user={this.state.user}/>
                    }
                </HttpsRedirect>
            </>
        )
    }
}