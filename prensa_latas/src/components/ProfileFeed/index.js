import React from 'react'

import styles from './style'
import axios from 'axios'
import './style.css';

export default class ProfileFeed extends React.Component {
    state = {
        notification: ''
    }
    
    componentDidMount(){
    axios.get('https://api.myjson.com/bins/ssseg')
        .then(response => this.setState({notification: response.data.notification}))
    }

    render() {
        return (        
            <>
{
    console.log(this.state.notification[0])
}
                <div style={styles.container}>
                    
                        <table>
                        <tr>
                            <th>
                                <h1 style={styles.feed}>Feed:</h1>
                            </th>
                        </tr>
                        <tr>
                            <td style={styles.feedline}>
                                <img style={styles.feedline}
                                        src={this.state.notification[0]}
                                />
                            </td>
                            <td style={styles.feedline}>
                                Você reciclou mais 3 latas para a promoção “Coca-cola Recycle Run!”. Toque para conferir! :D
                            </td>
                        </tr>
                        
                        </table>
                </div>

            </>
        )
    }
}