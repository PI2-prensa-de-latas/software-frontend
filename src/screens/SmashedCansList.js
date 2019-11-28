import React, { Component } from 'react';
import WaveHeader from '../components/WaveHeader/index';
import SmashedCansList from '../components/SmashedCansList/index';
import WarningPopup from '../components/WarningPopup';

class SmashedCansListScreen extends Component {
  render () {
    return (
      this.props.location.state !== undefined ? <div className="container-fluid" >
            <WaveHeader />
            <SmashedCansList state={this.props.location.state}/>
      </div> : <WarningPopup 
          message="Acesso não autorizado :("
          button="Ok"
          path="/"
      />);
  }
}

export default SmashedCansListScreen;