import React from 'react';
import NavTab from '../components/NavTab';
/* import './Signup.css'; */

class Signup extends React.Component {
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
                <NavTab activeLink="2" name="Регистрация" />
                <h1>Регистрация</h1>
            </>
        )
    }
}

export default Signup;