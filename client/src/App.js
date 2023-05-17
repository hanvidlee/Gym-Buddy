import './App.css';
// import useApplicationData from './hooks/useApplicationData';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/log/new" element={<Form />} />
          <Route path="/log/view" element={<FormView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

