import React, { Component } from 'react';
import style from './style';

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false,
    }

    componentDidMount() {
      this.verifyConnection();
    }

    async verifyConnection() {
      while (true) {
          await new Promise(resolve => setTimeout(resolve, 3000))
          fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ 
                isDisconnected: false
              });
              console.log('conectado')
            }).catch(() => {
              this.setState({ 
                isDisconnected: true
              });
              console.log('desconectado')
            })
      }
    }

    render() {
      return (
        <div>
          { this.state.isDisconnected === true ? (
              <div style={style.divColor}>
                <div style={style.space}></div>
                <p style={style.text}>Você não possui conexão com internet :(</p>
                <div style={style.space}></div>
              </div>
            ) : (
              <div></div>
            )
          }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return NetworkDetector;
}