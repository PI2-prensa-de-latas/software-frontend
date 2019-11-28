import React, { Component } from 'react';
import QrCodeConfirmation from '../components/QrCodeConfirmation/index';
import WarningPopup from '../components/WarningPopup';

class QrCodeConfirmationScreen extends Component {
  render () {
    return (
      this.props.location.state !== undefined ? <div className="container-fluid">
        <div>
            <QrCodeConfirmation state={this.props.location.state} />
        </div> 
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/"
      />);
  }
}

export default QrCodeConfirmationScreen;
