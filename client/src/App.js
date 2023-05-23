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
import useApplicationData from './hooks/useApplicationData';
import Analytics from './components/Analytics/Analytics';

function NavBar() {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return <Navigation />;
}

function App() {
  const {
    state,
    addWorkout,
    updateWorkout,
    deleteWorkout,
    addSet,
    updateSet,
    deleteSet,
    getSets,
    getWorkouts
  } = useApplicationData();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route reloadDocument path="/" element={<Home user={state.user} workouts={state.workouts} />} />
          <Route path="/history" element={
            <History
              key={`workout-info-${JSON.stringify(state)}`}
              workouts={state.workouts}
              sets={state.sets}
              exerciseDetails={state.historyDetails}
              exerciseHistory={state.history} />}
          />
          <Route path="/calendar" element={<Calendar dailyWorkouts={state.workouts} />} />
          <Route path="/log/new" element={<FormTest exercises={state.exercises} addWorkout={addWorkout} addSet={addSet} />} />
          <Route path="/log/show/:id" element={
            <FormShow
              key={`workout-info-${JSON.stringify(state)}`}
              workouts={state.workouts}
              updateWorkout={updateWorkout}
              addSet={addSet}
              deleteWorkout={deleteWorkout}
              sets={state.sets}
              updateSet={updateSet}
              deleteSet={deleteSet}
              getSets={getSets}
              getWorkouts={getWorkouts}
              exercises={state.exercises}
            />}
          />
          {/* <Route path="/log/test" element={<FormTest exercises={state.exercises} addWorkout={addWorkout} addSet={addSet} />} /> */}
          <Route path="/analytics" element={
            <Analytics 
              numWorkouts={state.analytics} 
              topFiveExercises={state.topFiveExercises} 
              exerciseProgress={state.exerciseProgress} 
              workoutsByMonth={state.workoutsByMonth} />} 
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
