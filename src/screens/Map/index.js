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
import ProfileHeader from "../../components/ProfileHeader";
import ProfileScore from "../../components/ProfileScore";
import ProfileFeed from "../../components/ProfileFeed";

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
        };
        this.geo_success = this.geo_success.bind(this);
        this.panToLocation = this.panToLocation.bind(this);
    }

    componentDidMount = async () => {
        await navigator
            .geolocation
            .getCurrentPosition(
                this
                    .geo_success
            );
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
                    this.mapComp = (
                        <MapComponent locations={this.state.locations} currentLocation={this.state.currentLocation}/>
                    )
                }
            );
        this.setState({is_loading: false})
    };

    geo_success(pos) {
        this.setState({
            currentLocation: fromLonLat([pos.coords.longitude, pos.coords.latitude]),
        })
        console.log(this.state.currentLocation);
        console.log(pos.coords.longitude,)
        console.log(pos.coords.latitude,)

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
        console.log("loc", this.state.locations)
        return (
            <>
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
                                {this.mapComp}
                            </div>
                        </>
                }
                <NavBar selected={"MAP"}/>
            </>

        );
    }
}

export default NetworkDetector(MapScreen);