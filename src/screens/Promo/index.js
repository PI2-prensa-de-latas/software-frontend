import React from 'react';
import axios from 'axios';

import WaveHeader from './../../components/WaveHeader';
import PromoItem from './../../components/PromoItem';
import NavBar from './../../components/NavBar';
import SpecificPromo from './SpecificPromo';
import Loader from 'react-loader-spinner';

import styles from './style';
import colors from './../../style/colors';
import NetworkDetector from './../../components/NetworkDetector';

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
        axios.get('https://api.myjson.com/bins/7th74')
            .then(response => this.setState({
                promo_list: response.data,
                is_loading: false,
            }))
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

        if (this.state.selected_promo === null) {
            console.log(styles.loading);
            return (
                <>
                    <WaveHeader title="Promoções"/>
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
                            items
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