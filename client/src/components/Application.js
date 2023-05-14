import '../App.css';
import useApplicationData from '../hooks/useApplicationData';

function Application() {
  const {
    state,
    dispatch
} = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.name} {user.email} </li>
));
return (<div className="App" >
<h1> Users </h1>

<ul> {userList} </ul>
</div >
);
}
export default Application;
