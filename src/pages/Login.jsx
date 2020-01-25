import React from 'react';
import NavTab from '../components/NavTab';
/* import './Login.css'; */

class Login extends React.Component {
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
                <NavTab activeLink="2" name="Логин" nameLink="Login" func={this.props.func} />
                <h1>Логин</h1>
            </>
        )
    }
}

export default Login;