import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = () => {
  const [exercises, setExercises] = useState([]);

  // hook for opening the menu
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // hook for setting value to the menu-trigger
  const [selectedValue, setSelectedValue] = useState('');

  // fetch exercise api from backend
  useEffect(() => {
    fetch('/api/exercises')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExercises(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if(menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const itemClickHandler = (event) => {
    setSelectedValue(event.target.innerText);
    setOpen(false);
  }


  return (
    <div className="menu-container" ref={menuRef}>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>{selectedValue ? selectedValue : 'Select Exercise'}</p>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>Filter</h3>
        <ul>
          {exercises.map((exercise) => (
            <DropdownItem key={exercise.id} text={exercise.name} handleClick={itemClickHandler}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <p onClick={props.handleClick}>{props.text}</p>
    </li>
  );
}

export default DropdownMenu;

