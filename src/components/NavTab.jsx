import React from 'react';
import NavLink from './NavLink.jsx';
import './NavTab.css';

class NavTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0
        }
    }

    render() {

        let login = this.props.name;
        let change = this.props.nameLink;

        const menu = [
            {link: "Профиль", id: '0', change: "Profile"},
            {link: "Карта", id: '1', change: "Map"},
            {link: login, id: '2', change: change}
        ];

        console.log('this.props.activeLink=', this.props.activeLink);

        return (
            <>
                {menu.map(nav => (
                    <NavLink key={nav.id} change={nav.change} func={this.props.func} id={nav.id} name={nav.link} className={ this.props.activeLink === nav.id ? "navLink activeLink" : "navLink" } />
                ))}
            </>
        )
    }
}

export default NavTab;