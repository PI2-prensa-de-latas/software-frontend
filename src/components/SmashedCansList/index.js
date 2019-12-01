import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from '../../env';

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

class SmashedCansList extends Component {
    state = {
        smashed_cans: [],
        rows: [],
        another_user: false,
    }

    componentDidMount() {
        this.getSmashedCans()
    }

    async getSmashedCans () {
        let cans_url = `${url}/smashedCan?where={
            "user":${USER_ID},
            "machine":${this.props.data.machine_id},
            "createdAt":{">":${this.props.data.initial_timestamp}}}`;
        let machine_url = `${url}/machine/${this.props.data.machine_id}`
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 500))
            const response_machine = await axios.get(machine_url,
                {headers: {'Authorization': AuthStr}})
            if(response_machine.data.connectUser === parseInt(USER_ID)) {
                const response_cans = await axios.get(cans_url,
                    {headers: {'Authorization': AuthStr}})
                const smashed_cans = response_cans.data;
                smashed_cans.sort((a, b) => a.id - b.id);
                this.setState({ smashed_cans: smashed_cans });
            } else {
                this.setState({ another_user: true });
            }
        }
    }

    render () {
        let rows = []
        for(let i=0; i<this.state.smashed_cans.length; i++) {
            rows.push(<tr key={i} style={style.tr}>
                <td style={style.tdLeft}><img src={can} alt='Logo' style={style.smashedCan} /></td>
                <td style={style.tdMiddle}>{this.state.smashed_cans[i].category.trademark}</td>
                <td style={style.tdRight}><MdCheckCircle style={style.checkCircle}/></td>
            </tr>)
        }

        return (
            <div style={style.fullScreen}>
                <p style={style.instructions}>
                    Posicione a lata na entrada da máquina, na horizontal, com a logo virada para cima receba seus pontos.
                </p>
                <div style={style.list}>
                    {this.state.smashed_cans.length === 0 ? (
                        <div style={style.waitingCan}>
                            Esperando lata <br/> ...
                        </div>
                    ) : (
                        <table style={style.table}>
                            {rows}
                        </table>
                    )}
                </div>
                <Link to={{
                    pathname: "/FinishCansList",
                    data: { smashed_cans: this.state.smashed_cans }
                }}>
                    <button style={style.button}>Finalizar</button>
                </Link>
                {this.state.another_user === true ? (
                    <div>
                        <div style={style.opaqueScreen}></div>
                        <div style={style.popupAnotherUser}>
                            <p style={style.popupAnotherUser.p}>Parece que outro alguém começou a usar essa máquina D:</p>
                            <Link to={'/Profile'}>
                                <button style={style.popupAnotherUser.button}>Terminar</button>
                            </Link>
                        </div>
                    </div>
                    
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}

export default SmashedCansList;