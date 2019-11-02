import React from 'react';
import WaveHeader from '../components/WaveHeader/index';
import SmashedCansList from '../components/SmashedCansList/index';

function SmashedCansListScreen() {
  return (
    <div className="container-fluid" >
      <div >
          <WaveHeader />
          <SmashedCansList />
      </div> 
    </div>);  
}

export default SmashedCansListScreen;