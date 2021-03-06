import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';
import { Redirect } from 'react-router-dom';
import api from './../../services/api';

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

class FinishCansList extends Component {
    state = {
        smashed_cans: [],
        rows: [],
        finish_use: false,
    }

    componentDidMount() {
        this.setState({
            smashed_cans: this.props.data.smashed_cans
        })
    }

    createCansNumberNotification = () => {
        api.post(
            `/registerSimpleCan/`,
            { cansNumber: this.state.smashed_cans.length,
              user: USER_ID },
            { headers: { Authorization: AuthStr } }
        );

        this.setState({
            finish_use: true,
        })
    }

    redirectToProfile = () => {
        if(this.state.finish_use) {
            return <Redirect 
                to={"/Profile"} 
            />
        }
    }

    render () {
        let rows = []
        for(let i=0; i<this.state.smashed_cans.length; i++) {
            rows.push(<tr key={i} style={style.tr}>
                <td style={style.tdLeft}><img src={can} alt='Logo' style={style.smashedCan} /></td>
                <td style={style.tdMiddle}>{this.state.smashed_cans[i].canCategory.trademark}</td>
                <td style={style.tdRight}><MdCheckCircle style={style.checkCircle}/></td>
            </tr>)
        }

        return (
            <div style={style.fullScreen}>
                <div style={style.list}>
                    <table style={style.table}>
                        {rows}
                    </table>
                </div>
                <button onClick={this.createCansNumberNotification} style={style.button}>Ok</button>
                {this.redirectToProfile()}
            </div>
        )
    }
}

export default FinishCansList;