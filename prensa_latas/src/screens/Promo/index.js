import React from 'react';
import axios from 'axios';

import PromoItem from './../../components/PromoItem';

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
                {items}
            </>
        )
    }
}