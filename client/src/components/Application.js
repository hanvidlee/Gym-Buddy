import '../App.css';
import useApplicationData from '../hooks/useApplicationData';
import Button from '../Button';
import Navigation from './Navigation';
import DropdownMenu from './DropDownMenu';


function Application(props) {
  const checkConfirm = () => {
    console.log('CONFIRMED!');
  };
  const checkDanger = () => {
    console.log('DANGER!!');
  };
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {' '}
      {user.name} {user.email}{' '}
    </li>
  ));
  return (
    <div className="App">
    <Navigation/>
      <h1> Users </h1>
      <Button onClick={checkConfirm} confirm>
        Confirm
      </Button>
      <Button onClick={checkDanger} danger>
        Danger
      </Button>
      <ul> {userList} </ul>
      <DropdownMenu/>
    </div>
  );
}
export default Application;
