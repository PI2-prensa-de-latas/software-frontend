import React, { Component } from 'react';
import WaveHeader from '../components/WaveHeader/index';
import SmashedCansList from '../components/SmashedCansList/index';

class SmashedCansListScreen extends Component {
  render () {
    return (
      <div className="container-fluid" >
            <WaveHeader />
            <SmashedCansList state={this.props.location.state}/>
      </div>);
  }
}

export default SmashedCansListScreen;