import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: [],
    history: {},
    sets: [],
    user: [], // there's nothing in here
    historyDetails: {},
    exercises: [],
    analytics: {},
    topFiveExercises: {},
    exerciseProgress: {},
    workoutsByMonth: {}
  });

  useEffect(() => {
    console.log('Inside useEffect');
    Promise.all([
      axios.get('http://localhost:8080/api/workouts'),
      axios.get('http://localhost:8080/api/history'),
      axios.get('http://localhost:8080/api/sets'),
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/history/details'),
      axios.get('http://localhost:8080/api/exercises'),
      axios.get('http://localhost:8080/api/analytics'),
      axios.get('http://localhost:8080/api/topFiveExercises'),
      axios.get('http://localhost:8080/api/exerciseProgress'),
      axios.get('http://localhost:8080/api/workoutsPerMonth')
    ])
      .then((all) => {
        console.log('THIS IS ALL', all);
        setState((prev) => ({
          ...prev,
          workouts: all[0].data,
          history: all[1].data,
          sets: all[2].data,
          user: all[3].data,
          historyDetails: all[4].data,
          exercises: all[5].data,
          analytics: all[6].data,
          topFiveExercises: all[7].data,
          exerciseProgress: all[8].data,
          workoutsByMonth: all[9].data
        }));
      })
      .catch((error) => {
        console.log('This is the error from connection: ', error);
      });
  }, []);

  ///// SETS
  // ADD 
  function addSet(workout_id, weight, reps, quantity, exercise) {
    const options = {
      url: 'http://localhost:8080/api/sets',
      method: "POST",
      data : {workout_id, weight, reps, quantity, exercise},
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
    console.log("options: ", options)
    return axios 
    (options)
    .then((data) => {
      return data;
    });
  }

  // UPDATE
  function updateSet(set_id, weight, reps, quantity, exercise) {
    return axios
    .post('http://localhost:8080/api/sets/edit', {
      set_id,
      weight,
      reps,
      quantity,
      exercise
    })
    .then((data) => {
      return data;
    });
  }

  // DELETE
  function deleteSet(set_id) {
    return axios
    .post('http://localhost:8080/api/sets/remove', {
      set_id
    })
    .then((data) => {
      return data;
    });
  }

  ///// WORKOUTS
  // ADD
  function addWorkout(user_id, workout_date, picture_url, description, title) {
    const options = {
      url: 'http://localhost:8080/api/workouts',
      method: "POST",
      data : { user_id, workout_date, picture_url, description, title },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
    console.log("options: ", options);
    return axios
      (options)
      .then((data) => {
        return data;
      });
  }

   // UPDATE
   function updateWorkout(workout_id, picture_url, description, title) {
    const options = {
      url: 'http://localhost:8080/api/workouts/edit',
      method: "POST",
      data : { workout_id, picture_url, description, title },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
    console.log("options: ", options);
    return axios
      (options)
      .then((data) => {
        return data;
      });
  }

  // DELETE
  function deleteWorkout(workout_id) {
    return axios
    .post('http://localhost:8080/api/workouts/remove', {
      workout_id
    })
    .then((data) => {
      return data;
    });
  }

  function deleteWorkout(workout_id) {
    const options = {
      url: 'http://localhost:8080/api/workouts/remove',
      method: "POST",
      data : { workout_id },
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
    console.log("options: ", options);
    return axios
      (options)
      .then((data) => {
        return data;
      });
  }

  return { state, addWorkout, updateWorkout, deleteWorkout, addSet, updateSet, deleteSet };
}
