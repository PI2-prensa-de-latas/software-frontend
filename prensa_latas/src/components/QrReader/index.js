import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import './style.css';
import style from './style';
 
class QrReaderCam extends Component {
  state = {
    result: 'No result',
    message_error: false,
  }
 
  handleScan = data => {
    let code = "TestError";
    if (data) {
      if (data !== code) {
        this.setState({
          message_error: true,
        })
        console.log('error')
      }
      this.setState({
        result: data,
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  closeErrorMessage = message_error => {
    if(message_error) {
      this.setState({
        message_error: false,
      })
    }
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.renderErrorMessage}
          onScan={this.handleScan}
          className="qr-reader" 
        />
        {console.log(this.state.result)}
        <div style={style.corner}>
          <div style={Object.assign({}, style.top, style.left)}></div>
          <div style={Object.assign({}, style.top, style.right)}></div>
          <div style={Object.assign({}, style.bottom, style.left)}></div>
          <div style={Object.assign({}, style.bottom, style.right)}></div>
        </div>
        <div style={style.cornerBorder}>
        </div>
        <Link to='/'>
          <button style={style.back}>
            <p style={style.arrow}></p>
          </button>
        </Link>
        {this.state.message_error===true?(
          <div style={style.popupError}>
            <p style={style.popupError.p}>Não Parece um QR Code nosso :(</p>
            <button onClick={this.closeErrorMessage} style={style.popupError.button}>Ok</button>
          </div>
        ):(
          <div></div>
        )}  
        
      </div>
    )
  }
}

export default QrReaderCam;