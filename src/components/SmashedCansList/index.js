import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import url from '../../env';

class SmashedCansList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.eventSource = new EventSource("http://localhost:1337/smashedCan");
    // }
    state = {
        smashed_cans: [],
        rows: [],
        another_user: false,
        redirect_finish_cans_list: false,
        user_id: 2,
        machine_id: 1,
        user_token: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTczODQxNTkwfQ.ByEU3vRxdSo21bNfhRRqoRmoCeds2bUSbKV_-70Ijuc',
    }

    // componentDidMount() {
        // axios.get('http://localhost:1337/smashedCan')
        // .then(res => {
        //     const smashed_cans = res.data;
        //     this.setState({ smashed_cans: smashed_cans });
        // })
        // const socket = socketIOClient('http://localhost:1337/');
        // socket.on("smashedCan/subscribe/", data => this.setState({smashed_cans: data}));
        // client
        // socket.get('/smashedCan/join', {
        //     room: 'test'
        // }, function(response) {
        //     console.log(response + ' porra')
        // });
        
    // }

    componentDidMount() {
        this.makeRequests()
    }

    async makeRequests () {
        let current_timestamp = new Date()/1;
        let current_url = `${url}/smashedCan?where={
            "user":${this.state.user_id},
            "machine":${this.state.machine_id},
            "createdAt":{">":${current_timestamp}}}`;
        console.log(current_timestamp);
        let count = 0;
        while (count < 1000) {
            await new Promise(resolve => setTimeout(resolve, 2000))
            const response = await axios.get(current_url,
                {headers: {'Authorization': this.state.user_token}})
            const smashed_cans = response.data;
            this.setState({ smashed_cans: smashed_cans });
            count++;
            // ...your response handling code here...
        }
    }

    setRedirectFinishCansList = () => {
    this.setState({
        redirect_finish_cans_list: true
    })
    }

    redirectToFinishCansList = () => {
        if (this.state.redirect_finish_cans_list) {
            console.log(this.state.smashed_cans)
            return <Redirect 
                to={{
                    pathname: "/FinishCansList",
                    state: { smashed_cans: this.state.smashed_cans }
                }} 
            />
        }
    }

    setAnotherUser = () => {
        this.setState({
            another_user: true,
        })
    }

    closeAnotherUserMessage = another_user => {
        if (another_user) {
            this.setState({
                another_user: false,
            })
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
                <p style={style.instructions}>Exemplo exemplo exemplo exemplo exemplo exemplo
                exemplo exemplo exemplo exemplo exemplo exemplo exemplo exemplo
                exemplo exemplo exemplo exemplo exemplo exemplo exemplo exemplo.</p>
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
                {this.redirectToFinishCansList()}
                <button onClick={this.setRedirectFinishCansList} style={style.button}>Finalizar</button>
                {this.state.another_user === true ? (
                    <div>
                        <div style={style.opaqueScreen}></div>
                        <div style={style.popupAnotherUser}>
                            <p style={style.popupAnotherUser.p}>Parece que outro alguém começou a usar essa máquina D:</p>
                            <button onClick={this.closeAnotherUserMessage} style={style.popupAnotherUser.button}>Terminar</button>
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