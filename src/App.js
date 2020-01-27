import React from 'react';
import Login from './pages/Login.jsx';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Header from './components/Header.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          activeLink: "0",
          page: "Profile",
          login: false,
          actLinkHeader: "profile"
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      event.preventDefault();
      this.setState({ page: event.target.name }, console.log("this.state.activeLink=", this.state.activeLink))
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({ login: true }, console.log("this.state.login=", this.state.login));
    this.setState({ page: "Map" }, console.log("this.state.page in HandlerLogin=", this.state.page));
}

  render() {

      let pages = {
        Profile: <Profile func={this.handleClick}/>,
        Map: <Map func={this.handleClick}/>,
        Login: <Login func={this.handleClick} loginFunc={this.handleLogin} />,
        Signup: <Signup func={this.handleClick} loginFunc={this.handleLogin} />
      }

      return (
          <>
              {pages[this.state.page]}
              <button onClick={this.handleClick} name="Profile" >тест state Profile</button>
              <button onClick={this.handleClick} name="Map" >тест state Map</button>
              <button onClick={this.handleClick} name="Login" >тест state Login</button>
              <button onClick={this.handleClick} name="Signup" >тест state Signup</button>
              
              <Header activeLink={this.state.actLinkHeader} func={handleClick} />
          </>
      )
  }
}

export default App;