import React from 'react';
import QrReaderCam from '../../components/QrReader/index';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from "react-https-redirect";

class Cam extends React.Component {

    render() {
        return (
            <HttpsRedirect>
                <div className="container-fluid">
                    <div>
                        <QrReaderCam/>
                    </div>
                </div>
            </HttpsRedirect>);
    }
}

export default NetworkDetector(Cam);
