import React, {Component} from 'react';
import {fromLonLat} from 'ol/proj.js';

import './style.css';
import styles from './style'
import MapComponent from './../../components/MapComponent';
import NavBar from './../../components/NavBar';
import NetworkDetector from './../../components/NetworkDetector';
import api from "../../services/api";

const USER_TOKEN = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(USER_TOKEN);


const LocationsSelect = (props) => {
    const locations = props.locations.map((item, index) =>
        <option key={index} value={item.coords} className="dd-locations">{item.name}</option>
    );
    return (
        <div>
            <select style={styles.searchBar} onChange={props.onSelectLocation}>
                {locations}
            </select>
        </div>
    )
}


class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: fromLonLat(['', '']),
            locations: []
        };
        this.geo_success = this.geo_success.bind(this);
        this.panToLocation = this.panToLocation.bind(this);
    }

    componentDidMount = async () => {
        await api
            .get(`/machine`, {
                headers: {Authorization: AuthStr}
            })
            .then(response => {
                    let machines = response.data;
                    let locations = machines.map(machine => {
                        let location = machine.location.split(' ');
                        let loc_x = parseFloat(location[0]);
                        let loc_y = parseFloat(location[1]);
                        let alias = machine.alias;
                        return {
                            name: alias,
                            coords: fromLonLat([loc_x, loc_y]),
                        }
                    });
                    this.setState({locations: locations});
                }
            );
        navigator
            .geolocation
            .getCurrentPosition(
                this
                    .geo_success
            );
    };

    geo_success(pos) {
        this.setState({
            currentLocation: fromLonLat([pos.coords.longitude, pos.coords.latitude]),
        })
        console.log(this.state.currentLocation);
    }
    ;

    panToLocation(e) {
        const selectedIndex = e.target.selectedOptions[0].index;
        const selectedLocation = this.locations[selectedIndex].coords;
        this.setState(() => {
            return {
                currentLocation: selectedLocation
            }
        });
    }

    render() {
        return (

            <div className="MapScreen">
                <LocationsSelect locations={this.state.locations} onSelectLocation={this.panToLocation}/>
                <MapComponent locations={this.state.locations} currentLocation={this.state.currentLocation}/>
                <NavBar selected={"MAP"}/>
            </div>
        );
    }
}

export default NetworkDetector(MapScreen);