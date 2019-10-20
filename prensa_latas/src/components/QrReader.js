import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import './QrReader.css';
 
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
          className='qr-reader' 
        />
        {console.log(this.state.result)}
        <div className="corner">
          <div className="top left"></div>
          <div className="top right"></div>
          <div className="bottom left"></div>
          <div className="bottom right"></div>
        </div>
        <div className="corner-border">
        </div>
        <Link to='/'>
          <button className="back">
            <p className="arrow arrow-left"></p>
          </button>
        </Link>
        {this.state.message_error===true?(
          <div className="popup-error">
            <p>Não Parece um QR Code nosso :(</p>
            <button onClick={this.closeErrorMessage}>Ok</button>
          </div>
        ):(
          <div></div>
        )}  
        
      </div>
    )
  }
}

export default QrReaderCam;