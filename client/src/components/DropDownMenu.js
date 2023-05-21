import React, { useState, useEffect, useRef } from 'react';
import {CgMenuHotdog} from 'react-icons/cg';
import {FaHistory} from 'react-icons/fa';

const DropdownMenu = () => {
  // const [exercises, setExercises] = useState([]);
  // const [records, setRecords] = useState([]);

  // hook for opening the menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // hook for setting value to the menu-trigger
  // const [selectedValue, setSelectedValue] = useState('');

  // // fetch exercise api from backend
  // useEffect(() => {
  //   fetch('/api/exercises')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setExercises(data);
  //       setRecords(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  // const itemClickHandler = (event) => {
  //   setSelectedValue(event.target.innerText);
  //   setOpen(false);
  // };

  // const filter = (event) => {
  //   const searchItemText = event.target.value.toLowerCase();
  //   setRecords(exercises.filter((f) => {
  //       return f.name.toLowerCase().includes(searchItemText);
  //     })
  //   );
  //   console.log(event.target.value);
  // };

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
          <DropdownItem text={'Home'} />
          <DropdownItem text={'Calendar'} />
          <DropdownItem text={'History'} />
          <DropdownItem text={'Logout'} />
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
