import React from 'react';
import NavTab from '../components/NavTab';
/* import './Map.css'; */

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0
        }
    }

    render() {

        return (
            <>
                <h1>Taxi-Loft</h1>
                <NavTab activeLink="1" name="Выход"  nameLink="Login" func={this.props.func} />
                <h1>Карта</h1>
            </>
        )
    }
}

export default Map;