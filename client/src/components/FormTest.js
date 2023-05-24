import React, { useState } from 'react';
import axios from 'axios';
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
import Loading from './LoadingIcon';

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
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  const [sets, setSets] = useState([]);

  const [dateState, setDateState] = useState('');

  const [loading, setLoading] = useState(false);

  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  const [image, setImage] = useState({});

  const [uploadedImage, setUploadedImage] = useState(null);

  const fileOnChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
    setUploadedImage(URL.createObjectURL(event.target.files[0]));
  };

  const formattedDate = moment(dateState).format('YYYY-MM-DD');

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("avatar", image);

    const options = {
      url: 'http://localhost:8080/api/uploadFile',
      method: "POST",
      data: formData
    };
    const response = await axios(options);

    setLoading(true);

    const addedworkout = await props.addWorkout(
      1,
      formattedDate,
      uploadedImage,
      description,
      title
    );
    exerciseSets.forEach((set) => {
      if (!set.isRemoved) {
        const { weight, reps, quantity, exercise } = set;
        props.addSet(addedworkout.data[0].id, weight, reps, quantity, exercise);
      }
    });

    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  const removeRow = (index) => {
    setExerciseSets((prev) => {
      const newPrev = [...prev];
      newPrev[index] = { ...newPrev[index], isRemoved: true };
      return [...newPrev];
    });
  };

  return (
    <CardContent class="home-wrapper">
      <Card
        elevation={6}
        sx={{
          paddingBottom: '1em',
          maxWidth: '425px',
          margin: '0 auto',
          paddingTop: '50px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={onSubmit} enctype="multipart/form-data">
            <Typography variant="h6" sx={{ color: 'white' }}>
              Create a Workout
            </Typography>
            <CardContent sx={{ paddingTop: "0px", marginLeft: "1px", display: "flex", justifyContent: "flex-start" }}>
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
            <CardContent sx={{ paddingTop: "0px", marginLeft: "1px", display: "flex", justifyContent: "flex-start" }}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <MobileDatePicker
                  label="Date"
                  inputFormat="MM/DD/YYYY"
                  value={dateState}
                  onChange={onDateChange}
                  error={false}
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
            </CardContent>
            <CardContent sx={{ paddingTop: "0px" }}>
              {uploadedImage && (
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      alt="Uploaded"
                      width={'250px'}
                      src={uploadedImage}
                      style={{ paddingTop: "0px" }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "red" } }}
                      onClick={() => {
                        setSelectedImage(null);
                        setUploadedImage(null); // Reset the uploaded image
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
              <div className="upload">
                <input type="file" onChange={fileOnChange} />
              </div>
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
              sx={{ marginLeft: "1em" }}
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
            <Link reloadDocument to="/"><Button type="button" variant="contained" sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "red" }, marginLeft: "1em", marginRight: "1em" }}>Cancel</Button></Link>
          </form>
        )}
      </Card>
    </CardContent >
  );
}
