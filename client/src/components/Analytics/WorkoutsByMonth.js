import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  BarChart,
  Bar
} from 'recharts';

export default function WorkoutsByMonth({workouts}) {

  console.log('WORKOUTS BY MONTH', workouts)
  // chartYear is not working
  // const chartYear = workouts.length > 0 ? new Date(workouts[0].date).getFullYear() : null;

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
              {/* <Label value={chartYear} position="insideBottom" style={{ fill: '#666', fontSize: '14px' }}/> */}
              <Bar dataKey="workout_count" name="Count" fill="#F44236" barSize={20}/>
            </BarChart>
        </div>
      </div>
    </>
  );
}
