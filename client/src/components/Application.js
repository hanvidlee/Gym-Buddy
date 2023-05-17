import '../App.css';
import useApplicationData from '../hooks/useApplicationData';
import Button from './Button';
import Navigation from './Navigation';
import DropdownMenu from './DropDownMenu';
import Calendar from './Calendar/Calender';
import getWorkoutForDayPerUser from '../helpers/selectors';

export const database = {
  users: [
    {
        "id": 1,
        "name": "Hanvid",
        "username": "hanvid_lee",
        "email": "hanvid@lee.com",
        "deleted_at": null,
        "created_at": "2023-05-17T03:00:36.025Z",
        "updated_at": "2023-05-17T03:00:36.025Z",
        "password_digest": "$2a$12$OAuee.UvVeMgT44M1VczDOdQwtM0UrjUaMmMh9y3C7RM5ZtPK5qi2"
    },
    {
        "id": 2,
        "name": "Dina",
        "username": "dinasaur",
        "email": "dina@saur.com",
        "deleted_at": null,
        "created_at": "2023-05-17T03:00:36.253Z",
        "updated_at": "2023-05-17T03:00:36.253Z",
        "password_digest": "$2a$12$qMo/Q2w0ncYggMjRvLkFReqEdq4Ur/.6gjioSd1awGOYEHK8/tfaC"
    },
    {
        "id": 3,
        "name": "Nelson",
        "username": "nelsonn",
        "email": "nelson@cheng.com",
        "deleted_at": null,
        "created_at": "2023-05-17T03:00:36.480Z",
        "updated_at": "2023-05-17T03:00:36.480Z",
        "password_digest": "$2a$12$dtNh5F/n.X5fy6ANPvsRueW3SLtx8iHHuqRt7EuQJAIUvCf.5mF0."
    }
  ],
  user_workouts: [
    {
        "id": 1,
        "workout_id": 1,
        "user_id": 1,
        "created_at": "2023-05-17T03:00:36.716Z",
        "updated_at": "2023-05-17T03:00:36.716Z"
    },
    {
        "id": 2,
        "workout_id": 2,
        "user_id": 1,
        "created_at": "2023-05-17T03:00:36.727Z",
        "updated_at": "2023-05-17T03:00:36.727Z"
    },
    {
        "id": 3,
        "workout_id": 3,
        "user_id": 2,
        "created_at": "2023-05-17T03:00:36.737Z",
        "updated_at": "2023-05-17T03:00:36.737Z"
    },
    {
        "id": 4,
        "workout_id": 4,
        "user_id": 1,
        "created_at": "2023-05-17T03:00:36.747Z",
        "updated_at": "2023-05-17T03:00:36.747Z"
    }
  ],

  days: [
    {
      id: 1,
      month: 'May',
      day: 1,
      year: 2023,
      empty: false,
      created_at: '2023-05-17T03:00:36.603Z',
      updated_at: '2023-05-17T03:00:36.603Z',
      deleted_at: null,
    },
    {
      id: 2,
      month: 'May',
      day: 2,
      year: 2023,
      empty: false,
      created_at: '2023-05-17T03:00:36.612Z',
      updated_at: '2023-05-17T03:00:36.612Z',
      deleted_at: null,
    },
    {
      id: 3,
      month: 'May',
      day: 3,
      year: 2023,
      empty: false,
      created_at: '2023-05-17T03:00:36.619Z',
      updated_at: '2023-05-17T03:00:36.619Z',
      deleted_at: null,
    },
    {
      id: 4,
      month: 'May',
      day: 4,
      year: 2023,
      empty: true,
      created_at: '2023-05-17T03:00:36.629Z',
      updated_at: '2023-05-17T03:00:36.629Z',
      deleted_at: null,
    },
  ],

  workouts: [
    {
      id: 1,
      picture: 'https://randomuser.me/api/portraits/women/1.jpg',
      description: 'Today was hard, I did like so much work. #sweat',
      deleted_at: null,
      created_at: '2023-05-01T00:12:08.109Z',
      updated_at: '2023-05-17T00:12:08.109Z',
    },
    {
      id: 2,
      picture: 'https://randomuser.me/api/portraits/men/2.jpg',
      description:
        "Wow, I feel so energized and refreshed after that workout! It's amazing how much better I feel when I take care of my body.",
      deleted_at: null,
      created_at: '2023-05-05T00:12:08.117Z',
      updated_at: '2023-05-17T00:12:08.117Z',
    },
    {
      id: 3,
      picture: 'https://randomuser.me/api/portraits/women/3.jpg',
      description:
        "My muscles are definitely feeling the burn, but it was totally worth it. I know I'm making progress towards my fitness goals.",
      deleted_at: null,
      created_at: '2023-05-15T00:12:08.122Z',
      updated_at: '2023-05-20T00:12:08.122Z',
    },
  ],

  day_workouts: [
    {
      id: 1,
      day_id: 1,
      workout_id: 1,
      created_at: '2023-05-17T03:00:36.663Z',
      updated_at: '2023-05-17T03:00:36.663Z',
    },
    {
      id: 2,
      day_id: 2,
      workout_id: 2,
      created_at: '2023-05-17T03:00:36.673Z',
      updated_at: '2023-05-17T03:00:36.673Z',
    },
    {
      id: 3,
      day_id: 3,
      workout_id: 3,
      created_at: '2023-05-17T03:00:36.683Z',
      updated_at: '2023-05-17T03:00:36.683Z',
    },
    {
      id: 4,
      day_id: 5,
      workout_id: 4,
      created_at: '2023-05-17T03:00:36.696Z',
      updated_at: '2023-05-17T03:00:36.696Z',
    },
  ],
};

// getWorkoutForDayPerUser(database, 1, 'Wed May 01 2023');


function Application(props) {
  // const checkConfirm = () => {
  //   console.log('CONFIRMED!');
  // };
  // const checkDanger = () => {
  //   console.log('DANGER!!');
  // };
  // const { state, dispatch } = useApplicationData();
  // const userList = state.users.map((user) => (
  //   <li key={user.id}>
  //     {' '}
  //     {user.name} {user.email}{' '}
  //   </li>
  // ));
  return (
    <div className="App">
    {/* <Navigation/>
      <h1> Users </h1>
      <Button onClick={checkConfirm} confirm>
        Confirm
      </Button>
      <Button onClick={checkDanger} danger>
        Danger
      </Button>
      <ul> {userList} </ul>
      <DropdownMenu/> */}
      <Calendar/>
    </div>
  );
}
export default Application;