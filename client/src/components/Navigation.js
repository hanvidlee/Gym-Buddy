import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import DropdownMenu from './DropDownMenu';
import logoPng from '../Img/logo.png'

export default function Navigation(props) {
  return (
    <nav className="navbar">
        <DropdownMenu className="navbar-left"/>
        <div className="navbar-center">
          <Link to={'/'}>
            <img src={logoPng} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <span>Welcome Hanvid!</span>
        </div>
    </nav>
  );
}