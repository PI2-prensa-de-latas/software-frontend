import React, { Component } from 'react';
import style from './style';
import { Link } from 'react-router-dom';

class WarningPopup extends Component {
    render () {
        return (
            <div style={style.popup}>
                <p style={style.p}>{this.props.message}</p>
                <Link to={this.props.path} style={style.a}>
                    <button style={style.button}>{this.props.button}</button>
                </Link>
            </div>
        );
    }
}

export default WarningPopup;