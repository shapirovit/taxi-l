import React from 'react';
import NavTab from '../components/NavTab';
/* import './Profile.css'; */

class Profile extends React.Component {
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
                <NavTab activeLink="0" name="Выход" />
                <h1>Профиль</h1>
            </>
        )
    }
}

export default Profile;