import React, { Component } from 'react';
import WaveHeader from '../components/WaveHeader/index';
import FinishCansList from '../components/FinishCansList/index';
import WarningPopup from '../components/WarningPopup';

class FinishCansListScreen extends Component {
  render() {
    return (
      this.props.location.state !== undefined ? <div className="container-fluid" >
            <WaveHeader />
            <FinishCansList smashed_cans={this.props.location.state.smashed_cans} />
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/"
      />
    );  
  }
}

export default FinishCansListScreen;