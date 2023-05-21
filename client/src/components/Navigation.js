import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import DropdownMenu from './DropDownMenu';
import logoPng from '../Img/logo.png'

export default function Navigation(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <DropdownMenu className="navbar-left"/>
        <div className="navbar-center">
          <Link to={'/'}>
            <img src={logoPng} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <span>Welcome!</span>
          {/* <Link to={'/login'} className="btn btn-outline-light">Logout</Link> */}
        </div>
      </div>
    </nav>
  );
}