import React, { Component } from 'react';
import style from './style';

class SmashedCansList extends Component {
    render () {
        return (
            <div>
                <h2 style={style.title}>Amassando Latas</h2>
                <p style={style.instructions}>Exemplo exemplo exemplo exemplo exemplo exemplo
                exemplo exemplo exemplo exemplo exemplo exemplo exemplo exemplo
                exemplo exemplo exemplo exemplo exemplo exemplo exemplo exemplo.</p>
                <div style={style.list}>
                    <div style={style.waitingCan}>
                        Esperando lata <br/> ...
                    </div>
                </div>
                <button onClick={this.closeErrorMessage} style={style.button}>Finalizar</button>
            </div>
        )
    }
}

export default SmashedCansList;