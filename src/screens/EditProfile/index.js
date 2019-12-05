import React from 'react';
import EditProfile from './../../components/EditProfile';

import Header from '../../components/Header';
import colors from "../../style/colors";
import api from "../../services/api";
import defaultPic from "../../assets/images/Pic.png";
import Loader from "react-loader-spinner";
import styles from "../Promo/style";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

export default class EditProfileScreen extends React.Component {
    constructor(props){
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

        if (this.state.user.pic === undefined) {
            this.setState({user: {...this.state.user, pic: defaultPic}})
        }

        this.setState({is_loading: false})
    }

    render() {
        return (
            <>
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
            </>
        )
    }
}