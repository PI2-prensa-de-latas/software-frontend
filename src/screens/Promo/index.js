import React from 'react';

import WaveHeader from './../../components/WaveHeader';
import PromoItem from './../../components/PromoItem';
import NavBar from './../../components/NavBar';
import SpecificPromo from './SpecificPromo';
import Loader from 'react-loader-spinner';
import api from './../../services/api';
import styles from './style';
import colors from './../../style/colors';
import NetworkDetector from './../../components/NetworkDetector';

const USER_ID = localStorage.getItem('user');


class PromoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            promo_list: [],
            selected_promo: null,
            is_loading: true,
        }
        this.clearSelection = this.clearSelection.bind(this);
    }


    componentDidMount() {
        api.post(
            '/getAllScores',
            { user: USER_ID }
        )
            .then(response => {
                if (response.data[0] !== null) {
                    this.setState({
                        promo_list: response.data,
                    })
                }
            })
            .then(
                this.setState({is_loading: false})
            )
    }

    select(i) {
        this.setState({
            selected_promo: i,
        })
    }

    clearSelection() {
        this.setState({
            selected_promo: null,
        })
    }

    render() {
        console.log(this.state.promo_list);
        
        let items = this.state.promo_list.map((item, id) => {
            return (
                <div onClick={() => {this.select(id)}} key={"divItem_"+id}>
                    <PromoItem
                        item={item}
                        key={"item_" + id}
                    />
                </div>
            )
        })
        
        let content = <></>

        if (this.state.is_loading) {
            content = (
                <Loader
                    style={styles.loading}
                    type="Grid"
                    color={colors.MidGreen}
                    height={100}
                    width={100}
                />
            )
        } else if (this.state.promo_list.length > 0) {
            content = items;
        } else {
            content = (
                <div style={styles.noPromoMessage}>
                    <span>
                        Não estamos com promoções ativas. Daqui a pouco colocamos mais ;)
                    </span>
                </div>
            )
        }

        if (this.state.selected_promo === null) {
            console.log(styles.loading);
            return (
                <>
                    <WaveHeader title="Promoções"/>
                    {
                        content
                    }
                    <NavBar selected="PROMO"/>
                </>
            )
        } else {
            let selected = this.state.promo_list[this.state.selected_promo];
            return(
                <>
                <WaveHeader title={selected.name}/>
                <SpecificPromo
                    item={selected}
                    backButton={this.clearSelection}
                />
                </>
            )
        }
    }
}

export default NetworkDetector(PromoScreen);