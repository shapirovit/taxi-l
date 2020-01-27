import React from 'react';
import './Form.css';

/* class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0
        }
    }

    render() {

        return (
            <>

            </>
        )
    }
} */

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = event => {
      event.preventDefault();
      // Предотвращаем перезагрузку страницы
  
      const login = event.target.login.value;
      const password = event.target.password.value;
  
      console.log(login, password);
      // Делаем что-то с данными...
    };
  
    render() {
      return (
        <form onSubmit={this.props.func}>
          <label>
            Логин:
            <input name="login" type="email" placeholder="Введите свой логин или емэйл" />
          </label>
          <label>
            Пароль:
            <input name="password" type="password" placeholder="Введите свой пароль" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Form;