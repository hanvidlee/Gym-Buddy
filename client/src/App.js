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
  const { state } = useApplicationData();

  console.log('THIS IS FOR DAILY EXERCISES: ', state.history)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History dailyExercises={state.history}/>} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/log/new" element={<Form />} />
          <Route path="/log/show" element={<FormShow />} />
          <Route path="log/test" element={<FormTest />} />
          <Route path="/test" element={<HomeTest dailyWorkouts={state.workouts}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
