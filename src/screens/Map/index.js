import React, { Component } from 'react';
import {fromLonLat} from 'ol/proj.js';

import './style.css';
import styles from './style'
import MapComponent from './../../components/MapComponent';
import NavBar from './../../components/NavBar';


const LocationsSelect = (props) => {
    const locations = props.locations.map((item, index) =>
        <option key={index} value={item.coords} className="dd-locations">{item.name}</option>
    );
    return(
        <div>
            <select style={styles.searchBar}  onChange={props.onSelectLocation}>
                {locations}
            </select>
        </div>
    )
}

class MapScreen extends Component {

    constructor () {
        super();
        this.locations = [
            {name: 'London', coords: fromLonLat([-0.12755, 51.507222])},
            {name: 'Moscow', coords: fromLonLat([37.6178, 55.7517])},
            {name: 'Istanbul', coords: fromLonLat([28.9744, 41.0128])},
            {name: 'Rome', coords: fromLonLat([12.5, 41.9])},
            {name: 'Bern', coords: fromLonLat([7.4458, 46.95])}
        ]
        this.state = {
            currentLocation : fromLonLat([-0.12755, 51.507222])
        }
        this.panToLocation = this.panToLocation.bind(this);
    }

    panToLocation(e) {
        const selectedIndex = e.target.selectedOptions[0].index;
        const selectedLocation = this.locations[selectedIndex].coords;
        this.setState(() => {
            return {
                currentLocation : selectedLocation
            }
        });
    }

    render() {
        return (
            <div className="MapScreen">
                <LocationsSelect locations={this.locations} onSelectLocation={this.panToLocation}/>
                <MapComponent currentLocation={this.state.currentLocation}/>
                <NavBar selected={"MAP"}/>
            </div>
        );
    }
}

export default MapScreen;