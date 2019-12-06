import React, {Component} from 'react';
import QrCodeConfirmation from '../../components/QrCodeConfirmation/index';
import WarningPopup from '../../components/WarningPopup';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';


class QrCodeConfirmationScreen extends Component {
    render() {
        return (
            <>
                <HttpsRedirect>
                    {this.props.location.data !== undefined ? <div className="container-fluid">
                        <div>
                            <QrCodeConfirmation data={this.props.location.data}/>
                        </div>
                    </div> : <WarningPopup
                        message="Acesso não autorizado :("
                        button="Ok"
                        path="/Profile"
                    />}
                </HttpsRedirect>
            </>
        );
    }
}

export default NetworkDetector(QrCodeConfirmationScreen);
