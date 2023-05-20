import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: {},
    history: {},
    sets: {},
    user: [], // there's nothing in here
    historyDetails: {}
  })

  useEffect(() => {
    console.log("Inside useEffect");
    Promise.all([
      axios.get('http://localhost:8080/api/workouts'),
      axios.get('http://localhost:8080/api/history'),
      axios.get('http://localhost:8080/api/sets'),
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/history/details')
    ]).then((all) => {
      console.log('THIS IS ALL', all)
      setState((prev) => ({
        ...prev,
        workouts: all[0].data,
        history: all[1].data,
        sets: all[2].data,
        user: all[3].data,
        historyDetails: all[4].data
      }));
    }).catch((error) => {
      console.log("This is the error from connection: ", error)
    })

    axios.post('http://localhost:8080/api/sets', {
      workout_id: ,// how to update correctly
      weight: , 
      reps: ,
      quantity: ,
      exercise: 
    }).then((response) => {
      console.log('Sets added successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an error adding sets: ', error);
    })

    axios.post('http://localhost:8080/api/sets/edit', {
      set_id: ,// how to update correctly
      weight: , 
      reps: ,
      quantity: ,
      exercise: 
    }).then((response) => {
      console.log('Sets updated successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an error updating sets: ', error);
    })

    axios.post('http://localhost:8080/api/sets/remove', {
      set_id: 
    }).then((response) => {
      console.log('Set removed successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an error removing set ', error);
    });

    axios.post('http://localhost:8080/api/workouts', {
      user_id: ,// how to update correctly
      day_id: , 
      picture_url: ,
      description: ,
      title: 
    }).then((response) => {
      console.log('Workouts added successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an error adding workouts: ', error);
    })

    axios.post('http://localhost:8080/api/workouts/edit', {
      workout_id: ,// how to update correctly
      picture_url: , 
      description: ,
      title:  
    }).then((response) => {
      console.log('Workouts updated successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an error updating workouts: ', error);
    })

    axios.post('http://localhost:8080/api/wokrouts/remove', {
      workout_id: 
    }).then((response) => {
      console.log('Workout removed successfully');
      // setState()
    }).catch((error) => {
      console.log('There is an removing workout ', error);
    });



  }, [])

  return { state }
}
