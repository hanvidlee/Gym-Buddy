import React, { useState } from 'react';

const Form = () => {
  const [workout, setWorkout] = useState({
    title: "title name",
    picture: "",
    description: ""
  });

  const [exercises, setExercises] = useState([
    "squat", "push ups", "sit ups"
  ]);

  const [exerciseSets, setExerciseSets] = useState([
    {
      exercise: "squat",
      reps: 10,
      quantity: 4,
      weight: 100
    }
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      workout, exerciseSets
    });
  };

  return (
    <div>
      <h1>FORM PAGE</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          value={workout.title}
          onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="picture"
          value={workout.picture}
          onChange={(e) => setWorkout({ ...workout, picture: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          value={workout.description}
          onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
        />
        <div>
          {exerciseSets.map((es, idx) => {
            return (
              <div>
                <input
                  type="text"
                  placeholder="reps"
                  value={es.reps}
                  onChange={(e) => {
                    exerciseSets[idx] = { ...exerciseSets[idx], reps: e.target.value };
                    setExerciseSets([...exerciseSets]);
                  }
                  }
                />
                <input
                  type="text"
                  placeholder="quantity"
                  value={es.quantity}
                  onChange={(e) => {
                    exerciseSets[idx] = { ...exerciseSets[idx], quantity: e.target.value };
                    setExerciseSets([...exerciseSets]);
                  }}
                />
              </div>
            );
          })}
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => {
          exerciseSets.push({
            exercise: "",
            reps: 0,
            quantity: 0,
            weight: 0
          });

          setExerciseSets([...exerciseSets]);
        }}>Add exercise</button>
      </form>
    </div>
  );
};

export default Form;