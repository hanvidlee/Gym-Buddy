// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useApplicationData = () => {
//   const [state, setState] = useState({
//     users: [],
//     loading: true,
//   });

//   useEffect(() => {
//     axios({
//       method: 'GET',
//       url: '/api/users',
//     })
//     .then(({ data }) => {
//       console.log(data);
//       setState(prevState => ({
//         ...prevState,
//         users: data,
//         loading: false, // set loading state to false when data has finished loading
//       }));
//     })
//     .catch((err) => console.log(err));
//   }, []);

//   return {
//     state,
//     setState,
//   };
// };

// export default useApplicationData;

import React, {
  useEffect,
  useReducer
} from 'react';
import dataReducer, {
  SET_USERS
} from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
      users: [],
      loading: true,
  });
  useEffect(() => {
      axios({
              method: 'GET',
              url: '/api/users',
          })
          .then(({
              data
          }) => {
              console.log(data);
              dispatch({
                  type: SET_USERS,
                  users: data
              });
          })
          .catch((err) => console.log(err));
  }, []);

  return {
      state,
      dispatch,
  };
};

export default useApplicationData;