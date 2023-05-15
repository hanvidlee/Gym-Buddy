import '../App.css';
import useApplicationData from '../hooks/useApplicationData';
import Button from './Button'
import React, { useReducer } from 'react';
import DropdownMenu from './ExerciseDropdownMenu';

function Application(props) {
  const checkConfirm = () => {
    console.log("CONFIRMED!")
  }
  const checkDanger = () => {
    console.log("DANGER!!")
  }
  const {
    state,
    dispatch
} = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.name} {user.email} </li>
));
return (<div className="App" >
<h1> Users </h1>
<Button 
onClick={checkConfirm} confirm>Confirm</Button>
<Button onClick={checkDanger} danger>Danger</Button>
<ul> {userList} </ul>
</div >
);
}
export default Application;