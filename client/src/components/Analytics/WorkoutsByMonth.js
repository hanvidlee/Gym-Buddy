import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';

export default function WorkoutsByMonth({workouts}) {

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20 px', boxShadow: '0px 13px 20px 0px #80808029 '}} >
        <div>
          <h3>Workouts Per Month</h3>
          <h5>2023</h5>
        </div>

        <div>
            <BarChart
              width={500}
              height={300}
              data={workouts}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={(data) => data.workout_month.toString()} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="workout_count" name="Count" fill="#F44236" barSize={20}/>
            </BarChart>
        </div>
      </div>
    </>
  );
}
