import React from 'react'

import axios from 'axios'
import styles from './style'

export default class ProfileHeader extends React.Component {
    
    state = {
        user: ''
    }
    
    componentDidMount(){
    axios.get('https://api.myjson.com/bins/ssseg')
        .then(response => this.setState({user: response.data}))
    }
    
    render() {
        return (
            <>
                <div style={styles.container} >
                    <img style={styles.profilePic}
                        src={this.state.user.pic}
                    />
                    <p style={styles.name}>
                        {this.state.user.name}
                    </p>
                </div>
                <div style={styles.blankSpace} />
            </>
        )
    }
}