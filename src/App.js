import React from 'react';
import Login from './pages/Login.jsx';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          activeLink: "0",
          page: "Map"
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      this.setState({ page: event.target.name }, console.log("this.state.activeLink=", this.state.activeLink))
  }

  render() {

      let pages = {
        Profile: <Profile onClick={this.handleClick}/>,
        Map: <Map onClick={this.handleClick}/>,
        Login: <Login onClick={this.handleClick}/>,
        Signup: <Signup onClick={this.handleClick}/>
      }

      return (
          <>
              {pages[this.state.page]}
              <button onClick={this.handleClick} name="Profile" >тест state Profile</button>
              <button onClick={this.handleClick} name="Map" >тест state Map</button>
              <button onClick={this.handleClick} name="Login" >тест state Login</button>
              <button onClick={this.handleClick} name="Signup" >тест state Signup</button>
          </>
      )
  }
}

export default App;