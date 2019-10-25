import React from 'react';
import QrCodeConfirmation from '../components/QrCodeConfirmation/index';

function QrCodeConfirmationScreen() {
  return (
    <div className="container-fluid" style={{height:'100%',}}>
      <div>
          <QrCodeConfirmation />
      </div> 
    </div>);  
}

export default QrCodeConfirmationScreen;
