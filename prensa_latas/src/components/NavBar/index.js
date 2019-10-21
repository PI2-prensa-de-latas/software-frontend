import React from 'react';

import {
    MdAnnouncement,
    MdAccountCircle,
    MdMap
} from "react-icons/md";

import style from './style'
import qrIcon from './../../assets/svg/qrcode-scan.svg'

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
                    <div style={style.qrContainner}>
                        <img
                            src={qrIcon}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        )
    }
}