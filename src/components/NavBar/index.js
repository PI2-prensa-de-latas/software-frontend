import React from 'react';

import {
    MdAnnouncement,
    MdAccountCircle,
    MdMap
} from "react-icons/md";

import style from './style'
import qrIcon from './../../assets/svg/qrcode-scan.svg'
import {Link} from "react-router-dom";

/* eslint-disable */

export default class NavBar extends React.Component {

    render () {
        return (
            <>
                <div style={style.container}>
                    <div style={style.bar}>
                        <div style={style.iconContainer}>
                            <div/>
                            {this.props.selected === 'PROMO' ?
                                <MdAnnouncement style={style.selected}/>
                                :
                                <Link to="/Promo" style={style.none}>
                                    <MdAnnouncement/>
                                </Link>
                            }
                            {this.props.selected === 'PROFILE' ?
                                <MdAccountCircle style={style.selected}/>
                                :
                                <Link to="/Profile" style={style.none}>
                                    <MdAccountCircle/>
                                </Link>
                            }
                            {this.props.selected === 'MAP' ?
                                <MdMap style={style.selected}/>
                                :
                                <Link to="/Map" style={style.none}>
                                    <MdMap/>
                                </Link>
                            }
                            <div/>
                        </div>
                    </div>
                    <Link to={'/QrReader'}>
                        <div style={style.qrButton}>
                            <div style={style.qrContainer}>
                                <img
                                    src={qrIcon}
                                    height={50}
                                    alt={""}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
                <div style={style.blankSpace}/>
            </>
        )
    }
}