import React from 'react';

import ProfileHeader from './../../components/ProfileHeader';
import ProfileScore from './../../components/ProfileScore';
import ProfileFeed from './../../components/ProfileFeed';

import NavBar from './../../components/NavBar';
import WaveHeader from './../../components/WaveHeader';

export default class ProfileScreen extends React.Component {

    render() {
        return (
            <>
                <WaveHeader/>
                <ProfileHeader/>
                <ProfileScore/>
                <ProfileFeed/>
                <NavBar selected={"PROFILE"}/>
            </>
        )
    }
}