import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = () => {
  const [exercises, setExercises] = useState([]);
  const [records, setRecords] = useState([]);

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
        setExercises(data);
        setRecords(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
    setSelectedValue(event.target.innerText);
    setOpen(false);
  };

  const filter = (event) => {
    const searchItemText = event.target.value.toLowerCase();
    setRecords(exercises.filter((f) => {
        return f.name.toLowerCase().includes(searchItemText);
      })
    );
    console.log(event.target.value);
  };

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
        <input type="text" className="form-control" placeholder='Search' onChange={filter} />
        <ul>
          {records.map((exercise) => (
            <DropdownItem
              key={exercise.id}
              text={exercise.name}
              handleClick={itemClickHandler}
            />
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
