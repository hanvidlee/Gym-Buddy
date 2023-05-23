import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import AnalyticsDropdown from "./AnalyticsDropDown";


// const data = [
//   {
//     date: '2023-05-02T04:00:00.000Z',
//     exercise: 'Bentover Rows',
//     weight: 250,
//   },
//   {
//     date: '2023-05-02T04:00:00.000Z',
//     exercise: 'Bench Press',
//     weight: 200,
//   },
//   {
//     date: '2023-05-03T04:00:00.000Z',
//     exercise: 'Bentover Rows',
//     weight: 200,
//   },
//   {
//     date: '2023-05-04T04:00:00.000Z',
//     exercise: 'Bentover Rows',
//     weight: 250,
//   },
//   {
//     date: '2023-05-05T04:00:00.000Z',
//     exercise: 'Bentover Rows',
//     weight: 300,
//   },
// ];

export default function ExerciseProgress({exercises}) {
  // format date to show month and day
  const formatAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectedChange = (value) => {
    setSelectedValue(value);
  }

  console.log('SELECTED VALUE FROM PARENT: ', selectedValue);

  console.log('WHAT ARE EXERCISES: ', exercises)
  const filteredExercises = exercises.filter((exercise) => {
    return exercise.exercise === selectedValue
  })

  console.log('filteredExercises: ', filteredExercises)

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20 px' }}>
        <div>
          <h1>Progress</h1>
        </div>

        <div>
            <AnalyticsDropdown exercises={exercises} onExerciseChange={handleSelectedChange} />
            <BarChart
              width={500}
              height={300}
              data={filteredExercises}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={formatAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="weight" fill="#F44236" barSize={20}/>
            </BarChart>
        </div>
      </div>
    </>
  );
}


      {/* <div style={{ backgroundColor: 'white', padding: '20 px' }}>
        <div>
          <h1>Exercise Title</h1>
        </div>

        <div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line
              type="montone"
              dataKey="weight"
              stroke="red"
              activeDot={{ r: 12 }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={formatAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Label value={chartYear} position="insideBottom" style={{ fill: '#666', fontSize: '14px' }}/>
          </LineChart>
        </div>
      </div> */}