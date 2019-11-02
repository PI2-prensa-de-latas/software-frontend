import React, { Component } from 'react';
import style from './style';
import can from '../../assets/images/beer_can.svg';
import { MdCheckCircle } from 'react-icons/md';

class SmashedCansList extends Component {
    state = {
        smashed_cans: [],
        rows: []

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
                <button onClick={this.setSmashedCans} style={style.button}>Finalizar</button>
            </div>
        )
    }
}

export default SmashedCansList;