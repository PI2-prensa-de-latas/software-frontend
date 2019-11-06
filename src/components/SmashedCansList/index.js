import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';

class SmashedCansList extends Component {
    state = {
        smashed_cans: [],
        rows: [],
        another_user: false,
    }

    setSmashedCans = () => {
        this.setState({
            smashed_cans: ['Coca-cola', 
                           'Pepsi',
                           'Fanta', 
                           'Coca-cola', 
                           'Pepsi', 
                           'Fanta', 
                           'Coca-cola', 
                           'Pepsi', 
                           'Fanta'],
        })
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
            rows.push(<tr style={style.tr}>
                <td style={style.tdLeft}><img src={can} alt='Logo' style={style.smashedCan} /></td>
                <td style={style.tdMiddle}>{this.state.smashed_cans[i]}</td>
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
                    {console.log(this.state.smashed_cans)}
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
                {this.state.smashed_cans.length === 0 ?
                    (
                        <button onClick={this.setSmashedCans} style={style.button}>Finalizar</button>
                    ) : (
                        <button onClick={this.setAnotherUser} style={style.button}>Finalizar</button> 
                    )}
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