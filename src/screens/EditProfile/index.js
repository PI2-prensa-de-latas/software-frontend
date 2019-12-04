import React from 'react';
import EditProfile from './../../components/EditProfile';

import Header from '../../components/Header';
import colors from "../../style/colors";

export default class EditProfileScreen extends React.Component {

    render() {
        return (
            <>
                <Header link={"/Start"} title={"Editar Perfil"} background={colors.MidGreen} fill={colors.White}/>
                <EditProfile/>
            </>
        )
    }
}