import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: {},
    history: {}, 
    exercises: {}, // there's nothing in here
    sets: {},
    users: [], // there's nothing in here
    historyDetails : {}
  })

  useEffect(() => {
    console.log("Inside useEffect");
    Promise.all([
      axios.get('http://localhost:8080/api/workouts'),
      axios.get('http://localhost:8080/api/history'),
      axios.get('http://localhost:8080/api/exercises'),
      axios.get('http://localhost:8080/api/sets'),
      axios.get('http://localhost:8080/api/users'),
      axios.get('http://localhost:8080/api/history/details')
    ]).then((all) => {
      console.log('THIS IS ALL', all)
      setState((prev) => ({
        ...prev,
        workouts: all[0].data,
        history: all[1].data,
        exercises: all[2].data,
        sets: all[3].data,
        users: all[4].data,
        historyDetails: all[5].data
      }));
    }).catch((error) => {
      console.log("This is the error from connection: ", error)
    })
  }, [])

  return { state }
}
