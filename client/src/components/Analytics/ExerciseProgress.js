import React, { useState } from 'react';
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
import AnalyticsDropdown from "./AnalyticsDropDown";

export default function ExerciseProgress({exercises}) {
  // format date to show month and day
  const formatAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleString('default', { month: 'short', day: 'numeric' });
  };

  // chartYear is not working
  const chartYear = exercises.length > 0 ? new Date(exercises[0].date).getFullYear() : null;

  // this is for the user selected value from drop down
  const [selectedValue, setSelectedValue] = useState('');

  // pass this to the dropdownmenu so that the change in value is being extracted and passed back to this parent component
  const handleSelectedChange = (value) => {
    setSelectedValue(value);
  }

  // filter the exercises to the selectedValue and pass this list to the bar graph
  const filteredExercises = exercises.filter((exercise) => {
    return exercise.exercise === selectedValue
  })

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20 px', boxShadow: '0px 13px 20px 0px #80808029 '}} >
        <div>
          <h3>Weight Progress</h3>
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
              <Label value={chartYear} position="insideBottom" style={{ fill: '#666', fontSize: '14px' }}/>
              <Bar dataKey="weight" fill="#F44236" barSize={20}/>
            </BarChart>
        </div>
      </div>
    </>
  );
}
