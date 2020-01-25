import React from 'react';
import './NavTab.css';

const NavLink = (props) => {
    return <button className={props.className} id={props.id} onClick={props.func} name={props.change} >{props.name}</button>
}

export default NavLink;