import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <Link to={'/'}><div className="navbar-brand text-white">Gym Buddy</div></Link>
        </div>
        <div className="navbar-center">
          <Link to={'/'} className="navbar-link">Home</Link>
          <Link to={'/history'} className="navbar-link">History</Link>
          <Link to={'/calendar'} className="navbar-link">Calendar</Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-welcome">
            <span>Welcome!</span>
          </div>
          <Link to={'/login'} className="btn btn-outline-light">Logout</Link>
        </div>
      </div>
    </nav>
  );
}