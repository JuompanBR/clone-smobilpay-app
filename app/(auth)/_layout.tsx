import { Stack } from 'expo-router';
import { useAuth } from './AuthContext';
import Login from './login';

export default function AuthLayout() {

  const { isAuthenticated } = useAuth();

  // If the user is already authenticated, redirect them to the home page
  // if (isAuthenticated) {
  //   return <Redirect href="/"/>
  // }
  
  return (
    <Login />
  );
}
