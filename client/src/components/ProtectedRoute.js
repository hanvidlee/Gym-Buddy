import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({user, children}) => {
  if (!user) {
    return <Navigate to={'/login'} replace={true} />
  }
  //let them go where they were intending to go
  return children
}