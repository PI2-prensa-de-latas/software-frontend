import React, { Component } from 'react';
import WaveHeader from '../../components/WaveHeader/index';
import FinishCansList from '../../components/FinishCansList/index';
import WarningPopup from '../../components/WarningPopup';
import NetworkDetector from './../../components/NetworkDetector';

class FinishCansListScreen extends Component {
  render() {
    return (
      this.props.location.data !== undefined ? <div className="container-fluid" >
            <WaveHeader title={'Finalização'} />
            <FinishCansList data={this.props.location.data} />
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/Profile"
      />
    );  
  }
}

export default NetworkDetector(FinishCansListScreen);