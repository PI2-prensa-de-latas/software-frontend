import React, { Component } from 'react';
import WaveHeader from '../../components/WaveHeader/index';
import FinishCansList from '../../components/FinishCansList/index';
import WarningPopup from '../../components/WarningPopup';

class FinishCansListScreen extends Component {
  render() {
    return (
      this.props.location.data !== undefined ? <div className="container-fluid" >
            <WaveHeader title={'Finalização'} />
            <FinishCansList smashed_cans={this.props.location.data.smashed_cans} />
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/"
      />
    );  
  }
}

export default FinishCansListScreen;