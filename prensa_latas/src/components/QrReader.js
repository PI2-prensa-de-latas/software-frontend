import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import './QrReader.css';
 
class QrReaderCam extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    let path = "https://ead.escoladotrabalhador.gov.br/mod/simplecertificate/verify.php?code=5d084f11-4bb0-4d89-9da2-073fc0a87866";
    if (data) {
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
        {/* <div style={{border: '10px solid', width: '50%', height: '50%', left: '25%', top: '25%', position: 'relative'}}></div> */}
        {/* <p>{this.state.result}</p> */}
        {console.log(this.state.result)}
        <Link to='/'>
          <button className="back">
            <p className="arrow left"></p>
          </button>
        </Link>
      </div>
    )
  }
}

export default QrReaderCam;