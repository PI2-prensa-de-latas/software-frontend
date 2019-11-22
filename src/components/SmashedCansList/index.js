import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from '../../env';

class SmashedCansList extends Component {
    state = {
        smashed_cans: [],
        rows: [],
        another_user: false,
        user_id: this.props.state.user_id,
        machine_id: this.props.state.machine_id,
        user_token: this.props.state.user_token,
    }

    componentDidMount() {
        this.getSmashedCans()
    }

    async getSmashedCans () {
        let cans_url = `${url}/smashedCan?where={
            "user":${this.state.user_id},
            "machine":${this.state.machine_id},
            "createdAt":{">":${this.props.state.initial_timestamp}}}`;
        let machine_url = `${url}/machine/${this.state.machine_id}`
        console.log(this.state.user_id)
        console.log(this.state.machine_id)
        console.log(this.props.state.initial_timestamp);
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 500))
            const response_machine = await axios.get(machine_url,
                {headers: {'Authorization': this.state.user_token}})
            if(response_machine.data.connectUser === this.state.user_id) {
                const response_cans = await axios.get(cans_url,
                    {headers: {'Authorization': this.state.user_token}})
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
                <h2 style={style.title}>Amassando Latas</h2>
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
                    state: { smashed_cans: this.state.smashed_cans }
                }}>
                    <button style={style.button}>Finalizar</button>
                </Link>
                {this.state.another_user === true ? (
                    <div>
                        <div style={style.opaqueScreen}></div>
                        <div style={style.popupAnotherUser}>
                            <p style={style.popupAnotherUser.p}>Parece que outro alguém começou a usar essa máquina D:</p>
                            <Link to={'/'}>
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