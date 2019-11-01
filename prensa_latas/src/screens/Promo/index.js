import React from 'react';
import axios from 'axios';

import WaveHeader from './../../components/WaveHeader';
import PromoItem from './../../components/PromoItem';
import NavBar from './../../components/NavBar';

export default class PromoScreen extends React.Component {
    state = {
        promo_list: []
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/7th74')
            .then(response => this.setState({
                promo_list: response.data,
            }))
    }

    render() {
        console.log(this.state.promo_list);

        let items = this.state.promo_list.map((item, id) => {
            return (
                <PromoItem
                    item={item}
                    key={"item_" + id}
                />
            )
        })

        return (
            <>
                <WaveHeader title="Promoções"/>
                {items}
                <NavBar selected="PROMO"/>
            </>
        )
    }
}