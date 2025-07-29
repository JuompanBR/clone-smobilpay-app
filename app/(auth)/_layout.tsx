import { Slot } from 'expo-router';
import { useAuth } from './AuthContext';

export default function AuthLayout() {

  const { isAuthenticated } = useAuth();

  // If the user is already authenticated, redirect them to the home page
  // if (isAuthenticated) {
  //   return <Redirect href="/"/>
  // }

  return (
    <Slot />
  );
}
