import React from 'react';

import {
    MdAnnouncement,
    MdAccountCircle,
    MdMap
} from "react-icons/md";

import style from './style'

export default class NavBar extends React.Component {
    render () {
        return (
            <div style={style.containner}>
                <div style={style.bar}>
                    <div style={style.iconContainner}>
                        <div/>
                        <MdAnnouncement/>
                        <MdAccountCircle/>
                        <MdMap/>
                        <div/>
                    </div>
                </div>
                <div style={style.qrButton}>
                </div>
            </div>
        )
    }
}