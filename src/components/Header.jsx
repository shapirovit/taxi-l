import React, { Memo } from 'react';
import './Header.css';
import { memo } from 'react';

const Header = (props) => {
  let pages = [
    {name: "Карта", id: map},
    {name: "Профиль", id: profile},
    {name: "Выход", id: login},
  ]

  return (
    pages.map(page => {
    <button key={page.id} name={page.id} onClick={props.func} className={ props.activeLink === page.id ? "headerLink activeLink" : "headerLink" } >page.name</button>})
  )
}

export default Header;