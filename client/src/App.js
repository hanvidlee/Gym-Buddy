import './App.css';

import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Calendar from './components/Calendar/Calender';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import History from './components/History';
import Form from './components/Form';
import FormShow from './components/FormShow';
import FormTest from './components/FormTest';
import HomeTest from './components/HomeTest';
import useApplicationData from './hooks/useApplicationData';

function NavBar() {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return <Navigation />;
}

function App() {
  const { state, addWorkout, updateWorkout, deleteWorkout, addSet, updateSet, deleteSet } = useApplicationData();
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History exerciseDetails={state.historyDetails} exerciseHistory={state.history}/>} />
          <Route path="/calendar" element={<Calendar dailyWorkouts={state.workouts}/>} />
          <Route path="/log/new" element={<Form />} />
          <Route path="/log/show" element={<FormShow updateWorkout={updateWorkout} deleteWorkout={deleteWorkout} sets={state.sets} updateSet={updateSet} deleteSet={deleteSet}/>} />
          <Route path="log/test" element={<FormTest addWorkout={addWorkout} addSet={addSet}/>} />
          <Route path="/test" element={<HomeTest user={state.user} dailyWorkouts={state.workouts}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
