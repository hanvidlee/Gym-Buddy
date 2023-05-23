import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormNewDropdown from './FormNewDropdown';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import './Home.scss';

export default function FormTest(props) {
  const exerciseList = props.exercises.map((e) => e.name);

  const [selectedImage, setSelectedImage] = useState(null);

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [exerciseSets, setExerciseSets] = useState([
    {
      exercise: '',
      reps: 0,
      quantity: 0,
      weight: 0,
    },
  ]);

  const navigate = useNavigate();

  const [sets, setSets] = useState([]);

  const [dateState, setDateState] = useState('');

  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const formattedDate = moment(dateState).format('YYYY-MM-DD');
  console.log('formatted date: ', formattedDate)

  const onSubmit = async (e) => {
    e.preventDefault();

    const addedworkout = await props.addWorkout(
      1,
      formattedDate,
      selectedImage,
      description,
      title
    );
    exerciseSets.forEach((set) => {
      if (!set.isRemoved) {
        const { weight, reps, quantity, exercise } = set;
        props.addSet(addedworkout.data[0].id, weight, reps, quantity, exercise);
      }
      navigate('/')
    });
  };

  const removeRow = (index) => {
    setExerciseSets((prev) => {
      const newPrev = [...prev];
      newPrev[index] = { ...newPrev[index], isRemoved: true };
      console.log(newPrev);
      return [...newPrev];
    });
  };

  const refresh = () => window.location.reload(true);

  return (
    <CardContent class="home-wrapper">
      <Card
        elevation={6}
        sx={{
          paddingBottom: '1em',
          maxWidth: '425px',
          margin: '0 auto',
          marginTop: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <form onSubmit={onSubmit}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Create a Workout
          </Typography>
          {selectedImage && (
            <div>
              <img
                alt="not found"
                width={'250px'}
                src={URL.createObjectURL(selectedImage)}
                value={selectedImage}
              />
              <Button onClick={() => setSelectedImage(null)}>Remove</Button>
            </div>
          )}
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Date"
              inputFormat="MM/DD/YYYY"
              value={dateState}
              onChange={onDateChange}
              renderInput={(params) => <TextField {...params} />}
              sx={{
                '& .MuiFormLabel-root': {
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '4px 3px',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </LocalizationProvider>

          <CardContent sx={{ paddingBottom: '0px' }}>
            <TextField
              label="Title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              defaultValue="Title"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: 'white' },
                shrink: true,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '4px 3px',
                  textAlign: 'center',
                },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </CardContent>
          <CardContent>
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
              style={{
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
              }}
            />
          </CardContent>
          <CardContent sx={{ padding: '0px' }}>
            <TextField
              id="outlined-multiline-static"
              multiline
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: 'white' },
                shrink: true,
              }}
              sx={{
                width: '390px',
                '& .MuiInputBase-input': {
                  fontSize: '13px',
                  padding: '4px 3px',
                },
                '& .MuiOutlinedInput-root': {
                  padding: '4px 10px',
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </CardContent>
          <CardContent>
            <TableContainer component={Paper} sx={{ backgroundColor: '#222' }}>
              <Table size="small" aria-label="a dense table">
                <TableBody>
                  {exerciseSets.map((es, index) => {
                    if (es.isRemoved === true) return null;

                    return (
                      <TableRow
                        key={es.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          height: '50px',
                        }}
                      >
                        <TableCell align="right" sx={{ padding: '4px 2px' }}>
                          <FormNewDropdown
                            index={index}
                            exerciseList={exerciseList}
                            exerciseSets={exerciseSets}
                            setExerciseSets={setExerciseSets}
                          />
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ maxWidth: '55px', padding: '4px 2px' }}
                        >
                          <TextField
                            required
                            label="lbs"
                            value={es.weight}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start"></InputAdornment>
                              ),
                            }}
                            InputLabelProps={{
                              sx: { color: 'white' },
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiInputBase-input': {
                                fontSize: '13px',
                                padding: '4px 3px',
                              },
                              '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                              },
                            }}
                            onChange={(event) => {
                              const updatedExerciseSets = [...exerciseSets];
                              updatedExerciseSets[index] = {
                                ...updatedExerciseSets[index],
                                weight: event.target.value,
                              };
                              setExerciseSets(updatedExerciseSets);
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ maxWidth: '55px', padding: '4px 2px' }}
                        >
                          <TextField
                            required
                            label="x"
                            value={es.quantity}
                            InputLabelProps={{
                              sx: { color: 'white' },
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiInputBase-input': {
                                fontSize: '13px',
                                padding: '4px 3px',
                              },
                              '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                              },
                            }}
                            onChange={(event) => {
                              const updatedExerciseSets = [...exerciseSets];
                              updatedExerciseSets[index] = {
                                ...updatedExerciseSets[index],
                                quantity: event.target.value,
                              };
                              setExerciseSets(updatedExerciseSets);
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ maxWidth: '55px', padding: '4px 2px' }}
                        >
                          <TextField
                            required
                            label="reps"
                            value={es.reps}
                            InputLabelProps={{
                              sx: { color: 'white' },
                              shrink: true,
                            }}
                            sx={{
                              '& .MuiInputBase-input': {
                                fontSize: '13px',
                                padding: '4px 3px',
                              },
                              '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': {
                                  borderColor: 'white',
                                },
                              },
                            }}
                            onChange={(event) => {
                              const updatedExerciseSets = [...exerciseSets];
                              updatedExerciseSets[index] = {
                                ...updatedExerciseSets[index],
                                reps: event.target.value,
                              };
                              setExerciseSets(updatedExerciseSets);
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ padding: '0px 1px' }}>
                          <IconButton
                            sx={{ padding: '0px', color: 'white' }}
                            aria-label="delete"
                            onClick={() => {
                              removeRow(index);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
         <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: 'green',
              '&:hover': { backgroundColor: 'green' },
            }}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="contained"
            sx={{ margin: '0 1em' }}
            onClick={() => {
              setExerciseSets([
                ...exerciseSets,
                {
                  exercise: '',
                  reps: 0,
                  quantity: 0,
                  weight: 0,
                },
              ]);
            }}
          >
            Add row
          </Button>
        </form>
      </Card>
    </CardContent>
  );
}
