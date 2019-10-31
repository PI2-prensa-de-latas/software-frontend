import React from 'react';
import axios from 'axios';

import WaveHeader from './../../components/WaveHeader';
import Header from './../../components/Header';
import PromoItem from './../../components/PromoItem';
import NavBar from './../../components/NavBar';
import SpecificPromo from './SpecificPromo';

export default class PromoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            promo_list: [],
            selected_promo: null,
        }
        this.clearSelection = this.clearSelection.bind(this);
    }


    componentDidMount() {
        axios.get('https://api.myjson.com/bins/7th74')
            .then(response => this.setState({
                promo_list: response.data,
                selected_promo: 2,
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
            return (
                <>
                    <WaveHeader title="Promoções"/>
                    {items}
                    <NavBar selected="PROMO"/>
                </>
            )
        } else {            
            return(
                <>
                <Header title="Promoções" action={this.clearSelection}/>
                <SpecificPromo
                    item={this.state.promo_list[this.state.selected_promo]}
                />
                </>
            )
        }
    }
}