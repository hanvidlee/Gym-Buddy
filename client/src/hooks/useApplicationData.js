import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    workouts: {},
    history: {},
    sets: {},
    users: [], // there's nothing in here
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
        users: all[3].data,
        historyDetails: all[4].data
      }));
    }).catch((error) => {
      console.log("This is the error from connection: ", error)
    })
  }, [])

  return { state }
}
