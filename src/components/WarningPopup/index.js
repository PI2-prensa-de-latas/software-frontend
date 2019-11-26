import React, { Component } from 'react';
import style from './style';
import { Link } from 'react-router-dom';

class WarningPopup extends Component {
    render () {
        const url = `/${this.props.path}`;
        console.log(url)
        return (
            <div style={style.popup}>
                <p style={style.p}>{this.props.message}</p>
                <Link to={this.props.path}>
                    <button style={style.button}>{this.props.button}</button>
                </Link>
            </div>
        );
    }
}

export default WarningPopup;