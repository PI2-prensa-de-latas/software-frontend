import React, {Component} from 'react';
import {fromLonLat} from 'ol/proj.js';

import './style.css';
import styles from './style'
import MapComponent from './../../components/MapComponent';
import NavBar from './../../components/NavBar';
import NetworkDetector from './../../components/NetworkDetector';
import api from "../../services/api";
import Loader from 'react-loader-spinner';
import colors from "../../style/colors";

import HttpsRedirect from 'react-https-redirect';

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
            locations: [],
            is_loading: true,
            none: true,
        };
        this.coordinates = "";
        this.geo_success = this.geo_success.bind(this);
        this.panToLocation = this.panToLocation.bind(this);
        navigator
            .geolocation
            .getCurrentPosition(
                this
                    .geo_success
            );
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
                            loc_x: loc_x,
                            loc_y: loc_y,
                        }
                    });
                    this.setState({locations: locations});
                }
            );
        this.setState({is_loading: false})
    };

    geo_success(pos) {
        this.setState({
            currentLocation: fromLonLat([pos.coords.longitude, pos.coords.latitude]),
        })
        console.log("currentPos", this.state.currentLocation);

    };

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
        console.log("locrender", this.state.currentLocation);
        if (this.state.none) {
            navigator
                .geolocation
                .getCurrentPosition(
                    this
                        .geo_success
                );
            this.setState({
                none: false
            });
            this.forceUpdate();
        }

        return (

            <>
                <HttpsRedirect>
                    {
                        this.state.is_loading ?
                            <Loader
                                style={styles.loading}
                                type="Grid"
                                color={colors.MidGreen}
                                height={100}
                                width={100}
                            />
                            :
                            <>
                                <div className="MapScreen">
                                    <MapComponent locations={this.state.locations}
                                                  currentLocation={this.state.currentLocation}/>
                                </div>
                            </>
                    }
                    <NavBar selected={"MAP"}/>
                </HttpsRedirect>
            </>

        );
    }
}

export default NetworkDetector(MapScreen);