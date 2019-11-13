import React, { Component } from 'react';
import WaveHeader from '../components/WaveHeader/index';
import FinishCansList from '../components/FinishCansList/index';

class FinishCansListScreen extends Component {
  render() {
    return (
    <div className="container-fluid" >
          <WaveHeader />
          <FinishCansList smashed_cans={this.props.location.state.smashed_cans} />
    </div>);  
  }
}

export default FinishCansListScreen;