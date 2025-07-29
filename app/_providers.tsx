import queryClient from '@/api';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { ReactNode, useCallback } from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthProvider } from './(auth)/AuthContext';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

function Providers({ children }: { children: ReactNode }) {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    const [fontsLoaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                        <PaperProvider>
                            {children}
                        </PaperProvider>
                    </ThemeProvider>
                </QueryClientProvider>
            </AuthProvider>
        </View>
    );
};

export default Providers;