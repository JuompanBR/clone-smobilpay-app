import { useAppStore } from '@/stores';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useAuth } from '../(auth)/AuthContext';

export default function CategoriesLayout() {

    const { isAuthenticated } = useAuth();
    const appStore = useAppStore();
    const router = useRouter();
    const colorScheme = useColorScheme();
    // If the user is already authenticated, redirect them to the home page
    // if (isAuthenticated) {
    //   return <Redirect href="/"/>
    // }

    return (
        <Stack>
            <Stack.Screen
                name='[id]'
                options={{
                    headerShown: true,
                    headerTitle: appStore.currentCategory?.name ?? "Category",
                    headerBackVisible: true,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()} style={{ paddingHorizontal: 16 }}>
                            <Ionicons name="chevron-back" size={24} color={colorScheme == 'light' ? 'black' : 'white'} />
                        </Pressable>
                    ),
                }}
            />
        </Stack>
    );
}
