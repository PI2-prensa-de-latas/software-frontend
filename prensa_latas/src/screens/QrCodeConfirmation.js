import React from 'react';
import QrCodeConfirmation from '../components/QrCodeConfirmation/index';

function QrCodeConfirmationScreen() {
  return (
    <div className="container-fluid">
      <div>
          <QrCodeConfirmation name="Nome da Máquina" />
      </div> 
    </div>);  
}

export default QrCodeConfirmationScreen;
