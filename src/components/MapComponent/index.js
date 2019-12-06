import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'ol/ol.css';
import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import Map from 'ol/Map';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Circle as CircleStyle, Fill, Stroke, Style, Icon} from 'ol/style';
import {fromLonLat} from 'ol/proj';
import canIcon from "../../assets/svg/canIcon.svg";


class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.mapRef = null;
        this.olMap = null;
        this.setMapRef = element => {
            this.mapRef = element;
        }

    }

    render() {
        const styles = {height: '100%', width: '100%'}
        return (
            <div style={styles} ref={this.setMapRef}></div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.currentLocation !== this.props.currentLocation;
    }

    componentWillUpdate(nextProps) {
        const mapView = this.olMap.getView();
        mapView.animate({
            center: nextProps.currentLocation,
            duration: 2000
        });

    }

    componentDidMount() {
        const mapDOMNode = ReactDOM.findDOMNode(this.mapRef);
        var view = new View({
            center: fromLonLat([this.props.locations[0].loc_x, this.props.locations[0].loc_y]),
            zoom: 12
        });

        var map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: mapDOMNode,
            view: view
        });

        var geolocation = new Geolocation({
            // enableHighAccuracy must be set to true to have the heading value.
            trackingOptions: {
                enableHighAccuracy: true
            },
            projection: view.getProjection()
        });
        geolocation.setTracking(true);


// handle geolocation error.
        geolocation.on('error', function (error) {
            var info = document.getElementById('info');
            info.innerHTML = error.message;
            info.style.display = '';
        });

        var accuracyFeature = new Feature();
        geolocation.on('change:accuracyGeometry', function () {
            accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
        });

        var positionFeature = new Feature();
        positionFeature.setStyle(new Style({
            image: new CircleStyle({
                radius: 6,
                fill: new Fill({
                    color: '#3399CC'
                }),
                stroke: new Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        }));

        geolocation.on('change:position', function () {
            var coordinates = geolocation.getPosition();
            positionFeature.setGeometry(coordinates ?
                new Point(coordinates) : null);
        });
        var vectorArr = new VectorSource({
            //create empty vector
        });
        for (var i = 0; i < this.props.locations.length; i++) {
            var iconFeature = new Feature({
                geometry: new Point(fromLonLat([this.props.locations[i].loc_x, this.props.locations[i].loc_y])),
            });
            console.log(iconFeature);
            var iconStyle = new Style({
                image: new Icon({
                    anchor: [0, 0],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: canIcon,
                })

            });
            // THIS IS NEW - add each style individually to the feature
            iconFeature.setStyle(iconStyle);
            // First add the feature when it has got its style
            vectorArr.addFeature(iconFeature);
        }

        vectorArr.addFeature(accuracyFeature);
        vectorArr.addFeature(positionFeature);

        new VectorLayer({
            map: map,
            source: vectorArr,
        });

        this.olMap = map;
    }

}

export default MapComponent