import React from 'react';
import './NavTab.css';

const NavLink = (props) => {
    return <button className={props.className} id={props.id} >{props.name}</button>
}

export default NavLink;