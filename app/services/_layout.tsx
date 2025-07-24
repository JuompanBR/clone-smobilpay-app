import { useLocalSearchParams } from "expo-router";
import { useAuth } from '../(auth)/AuthContext';
import Service from './[id]';

export default function AuthLayout() {
    const { id } = useLocalSearchParams();
    const { isAuthenticated } = useAuth();

    // use tanStack to load the necessary data here

    // If the user is already authenticated, redirect them to the home page
    // if (isAuthenticated) {
    //   return <Redirect href="/"/>
    // }

    return (
        <>
            <Service />
        </>
    );
}
