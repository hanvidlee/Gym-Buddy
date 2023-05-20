import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: {}
  })

  useEffect(() => {
    console.log("Inside useEffect");
    Promise.all([
      axios.get('http://localhost:8080/api/workouts'),
      // axios.get('http://localhost:8080/api/history'),
      // axios.get('http://localhost:8080/api/exercises'),
      // axios.get('http://localhost:8080/api/sets'),
      // axios.get('http://localhost:8080/api/users')
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        workouts: all[0].data
      }));
    }).catch((error) => {
      console.log("This is the error from connection: ", error)
    })
  }, [])

  return { state }
}
