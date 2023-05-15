import React, { useState, useEffect } from 'react';

const DropdownMenu = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('/api/exercises')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setExercises(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <select>
      {exercises.map(exercise => (
        <option key={exercise.id} value={exercise.name}>
          {exercise.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;