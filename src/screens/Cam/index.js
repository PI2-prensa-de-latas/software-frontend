import React, { Component } from 'react';
import QrReaderCam from '../../components/QrReader/index';
import NetworkDetector from './../../components/NetworkDetector';

class Cam extends React.Component {
    
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <QrReaderCam />
                </div>
            </div>);
    }
}

export default NetworkDetector(Cam);
