import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import './QrReader.css';
 
class QrReaderCam extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    // let path = "https://ead.escoladotrabalhador.gov.br/mod/simplecertificate/verify.php?code=5d084f11-4bb0-4d89-9da2-073fc0a87866";
    if (data) {
      // if (data !== path) {
      //   return (
      //     <div>
      //       Tá errado!
      //       <button>Ok</button>
      //     </div>
      //   )
      // }
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          className='QrReader' 
        />
        <div className="corner">
          <div className="top left"></div>
          <div className="top right"></div>
          <div className="bottom left"></div>
          <div className="bottom right"></div>
        </div>
        <div className="corner-border">
        </div>
        {console.log(this.state.result)}
        <Link to='/'>
          <button className="back">
            <p className="arrow arrow-left"></p>
          </button>
        </Link>
        {/*<div className="popup-error">
          <p>Não parece ser um QR Code nosso :(</p>
          <p><button>Ok</button></p>
        </div> */}
      </div>
    )
  }
}

export default QrReaderCam;