# GymBuddy
GymBuddy is a fitness tracking app that empowers users to monitor their fitness progress.

## Quick Glance
This is the About Us page that introduces the team behind the app.
!["Screenshot of About Us page"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/about-us.jpg?raw=true)

This is what the calendar looks like. The user can maneuver around the calendar to view the days they have worked out, which is indicated by the gym icon.

!["Screenshot of Calendar page"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/Calendar.jpg?raw=true)

A user is first directed to the the home page, which is a dashboard contianing all their workout logs. They can click on "View Details" which will display additional details where they have the ability to edit the information.
!["Gif of homepage and editing a workout"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/edit-workouts.gif?raw=true)

Example of how a user can create a workout.
!["Gif of how to create a workout"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/create-workout.gif?raw=true)

Example of how a user can delete a logged workout.
!["Gif of how to delete a workout"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/delete-workouts.gif?raw=true)

This is the history page displaying all exercises in all logged workouts and filter for specific exercises the user has done.
!["Gif of the history page functionality"](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/history-page.gif?raw=true)

This is the analytics page displaying personalized metrics based on the user's workout logs.
!["Gif of the analytics page functionality "](https://github.com/hanvidlee/Gym-Buddy/blob/master/docs/analytics-page.gif?raw=true)

## Dependencies
- React
- Express
- Multer
- Material UI
- PostgreSQL
- Rechart
- Day.js
- Moment

## Setup
### In the project/backend2 directory, you can run:

- 'npm install' to install dependencies
- Create .env file based on .env.example
- 'startpostgres' to start up postgres and login
- 'CREATE DATABASE gymbuddy' and '\c gymbuddy' in order to connect to gymbuddy
- 'npm run db:reset' to create, load, and seed db
- 'npm start' to run webpack development server
- Open [http://localhost:8080](http://localhost:8080) to view the backend routes in your browser

### In the project/client directory, you can run: 
- 'yarn install' to install dependencies
- 'yarn start' to run the browser
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser
