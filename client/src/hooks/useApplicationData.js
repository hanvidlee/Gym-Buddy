import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: {},
    history: {},
    sets: {},
    user: [], // there's nothing in here
    historyDetails: {},
    exercises: []
  });

  useEffect(() => {
    console.log('Inside useEffect');
    Promise.all([
      axios.get('http://localhost:8080/api/workouts'),
      axios.get('http://localhost:8080/api/history'),
      axios.get('http://localhost:8080/api/sets'),
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/history/details'),
      axios.get('http://localhost:8080/api/exercises')
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
          exercises: all[5].data
        }));
      })
      .catch((error) => {
        console.log('This is the error from connection: ', error);
      });

      // ADD
    // axios.post('http://localhost:8080/api/sets', {
    //   workout_id: ,// how to update correctly
    //   weight: ,
    //   reps: ,
    //   quantity: ,
    //   exercise:
    // }).then((response) => {
    //   console.log('Sets added successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an error adding sets: ', error);
    // })

    // UPDAET
    // axios.post('http://localhost:8080/api/sets/edit', {
    //   set_id: ,// how to update correctly
    //   weight: ,
    //   reps: ,
    //   quantity: ,
    //   exercise:
    // }).then((response) => {
    //   console.log('Sets updated successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an error updating sets: ', error);
    // })

    // DELETE
    // axios.post('http://localhost:8080/api/sets/remove', {
    //   set_id:
    // }).then((response) => {
    //   console.log('Set removed successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an error removing set ', error);
    // });

    // ADD
    // axios.post('http://localhost:8080/api/workouts', {
    //   user_id: ,// how to update correctly
    //   day_id: ,
    //   picture_url: ,
    //   description: ,
    //   title:
    // }).then((response) => {
    //   console.log('Workouts added successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an error adding workouts: ', error);
    // })

    // UPDATE
    // axios.post('http://localhost:8080/api/workouts/edit', {
    //   workout_id: ,// how to update correctly
    //   picture_url: ,
    //   description: ,
    //   title:
    // }).then((response) => {
    //   console.log('Workouts updated successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an error updating workouts: ', error);
    // })

    // DELETE
    // axios.post('http://localhost:8080/api/wokrouts/remove', {
    //   workout_id:
    // }).then((response) => {
    //   console.log('Workout removed successfully');
    //   // setState()
    // }).catch((error) => {
    //   console.log('There is an removing workout ', error);
    // });
  }, []);

  ///// SETS
  // ADD 
  function addSet(workout_id, weight, reps, quantity, exercise) {
    return axios.post('http://localhost:8080/api/sets', {
      workout_id,
      weight,
      reps,
      quantity,
      exercise
    })
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
  function addWorkout(user_id, day_id, picture_url, description, title) {
    return axios
      .post('http://localhost:8080/api/workouts', {
        user_id,
        day_id,
        picture_url,
        description,
        title,
      })
      .then((data) => {
        return data;
      });
  }

   // UPDATE
   function updateWorkout(workout_id, picture_url, description, title) {
    return axios
    .post('http://localhost:8080/api/workouts/edit', {
      workout_id,
      picture_url,
      description,
      title
    })
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

  return { state, addWorkout, updateWorkout, deleteWorkout, addSet, updateSet, deleteSet };
}
