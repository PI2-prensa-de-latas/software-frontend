import React from 'react';
import WaveHeader from '../components/WaveHeader/index';
import SmashedCansList from '../components/SmashedCansList/index';

function SmashedCansListScreen() {
  return (
    <div className="container-fluid" >
          <WaveHeader />
          <SmashedCansList />
    </div>);  
}

export default SmashedCansListScreen;