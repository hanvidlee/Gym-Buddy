import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('http://localhost:8080/api/workouts').then((res) => {
      console.log('res', res);
    });
  }, []);
  return (
    <div>
      <h1>DASHBOARD</h1>
      {/* render  */}
    </div>
  );
};

export default Home;
