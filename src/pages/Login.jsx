import React from 'react';
import NavTab from '../components/NavTab.jsx';
import Form from '../components/Form.jsx';
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
                <NavTab activeLink="2" name="Логин" nameLink="Login" />
                <h1>Логин</h1>
                <Form  func={this.props.loginFunc} />
            </>
        )
    }
}

export default Login;