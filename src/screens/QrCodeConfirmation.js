import React, { Component } from 'react';
import QrCodeConfirmation from '../components/QrCodeConfirmation/index';

class QrCodeConfirmationScreen extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div>
            <QrCodeConfirmation state={this.props.location.state} />
        </div> 
      </div>);
  }
}

export default QrCodeConfirmationScreen;
