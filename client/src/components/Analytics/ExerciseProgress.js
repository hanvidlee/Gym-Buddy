import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const data = [
  {
    date: "2023-05-02T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 250
  },
  {
    date: "2023-05-02T04:00:00.000Z",
    exercise: "Bench Press",
    weight: 200
  },
  {
    date: "2023-05-03T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 200
  },
  {
    date: "2023-05-04T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 250
  },
  {
    date: "2023-05-05T04:00:00.000Z",
    exercise: "Bentover Rows",
    weight: 300
  }
];

export default function ExerciseProgress() {

  const formatAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  };

  const chartYear = new Date(data[0].date).getFullYear();

  return (
    <div>
      <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5, }} >
        <Line type='montone' dataKey='weight' stroke='red' activeDot={{ r: 12 }}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey='date' tickFormatter={formatAxis}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Label value={chartYear} position='top' />
      </LineChart>
    </div>
  )
}