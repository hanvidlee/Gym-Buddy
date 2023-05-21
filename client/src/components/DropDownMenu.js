import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {CgMenuHotdog} from 'react-icons/cg';
// import logout from '../Img/logout'

const DropdownMenu = () => {
  // hook for opening the menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const itemClickHandler = (event) => {
    setOpen(false);
  };

  return (
    <div className="menu-container" ref={menuRef}>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>Menu</p>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>
          hanvid_lee
          <br />
          <span>Lonely gym boy</span>
        </h3>
        <ul>
          <Link to={'/'}><DropdownItem text={'Home'} handleClick={itemClickHandler}/> </Link>
          <Link to={'/calendar'}><DropdownItem text={'Calendar'} handleClick={itemClickHandler}/> </Link>
          <Link to={'/history'}><DropdownItem text={'History'} handleClick={itemClickHandler}/> </Link>
          <Link to={'/logout'}><DropdownItem text={'Logout'} handleClick={itemClickHandler}/> </Link>
        </ul>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      {/* <img src={props.img}></img> */}
      <a> {props.text} </a>
    </li>
  );
}

export default DropdownMenu;
