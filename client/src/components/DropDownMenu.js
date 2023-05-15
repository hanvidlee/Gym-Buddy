import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [exercises, setExercises] = useState([]);

  // hook for opening the menu
  const [open, setOpen] = useState(false);

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

  return (
    <div className="menu-container">
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>Select Exercises</p>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <h3>Filter</h3>
        <ul>
          {exercises.map((exercise) => (
            <DropdownItem key={exercise.id} text={exercise.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <p>{props.text}</p>
    </li>
  );
}

export default DropdownMenu;

