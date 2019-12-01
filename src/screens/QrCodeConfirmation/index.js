import React, { Component } from 'react';
import QrCodeConfirmation from '../../components/QrCodeConfirmation/index';
import WarningPopup from '../../components/WarningPopup';

class QrCodeConfirmationScreen extends Component {
  render () {
    return (
      this.props.location.data !== undefined ? <div className="container-fluid">
        <div>
            <QrCodeConfirmation data={this.props.location.data} />
        </div> 
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/Profile"
      />);
  }
}

export default QrCodeConfirmationScreen;
