import React, {Component} from 'react';
import WaveHeader from '../../components/WaveHeader/index';
import SmashedCansList from '../../components/SmashedCansList/index';
import WarningPopup from '../../components/WarningPopup';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';


class SmashedCansListScreen extends Component {
    render() {
        return (
            <HttpsRedirect>
                this.props.location.data !== undefined ? <div className="container-fluid">
                <WaveHeader title={"Amassando Latas"}/>
                <SmashedCansList data={this.props.location.data}/>
            </div> : <WarningPopup
                message="Acesso não autorizado :("
                button="Ok"
                path="/Profile"
            />
            </HttpsRedirect>
        );
    }
}

export default NetworkDetector(SmashedCansListScreen);