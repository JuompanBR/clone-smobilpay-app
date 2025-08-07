import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { useAuth } from '../(auth)/AuthContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();


  const { isAuthenticated } = useAuth();
  const router = useRouter();
  // if (isAuthenticated == false) {
  //   console.log("User is not authenticated...");
  //   return <Redirect href="/login" />
  // }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'light' ? '#ddd' : '#111',
        tabBarInactiveTintColor: colorScheme === 'light' ? '#111' : '#ddd',
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        headerStatusBarHeight: 0,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.mainAppColor,
            height: 50,
            paddingTop: 10
          },
        }),
      }}>
      <Tabs.Screen
        name="index"

        options={{
          sceneStyle: {
            paddingTop: 19,
            backgroundColor: Colors[colorScheme ?? 'light'].background
          },
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons color={color} size={28} name="home" />,
        }}
      />
      <Tabs.Screen
        name="account"

        options={{
          sceneStyle: {
            paddingTop: 0,
            backgroundColor: Colors[colorScheme ?? 'light'].background
          },
          title: 'Account',
          tabBarIcon: ({ color }) => <Ionicons color={color} size={28} name="person-circle" />,
          headerShown: true,
          headerTitle: "Account",
          headerTitleStyle: {
            color: colorScheme == 'dark' ? 'black' : '#aaa',
          },
          headerStyle: {
            backgroundColor: Colors.mainAppColor,
          }
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          sceneStyle: {
            paddingTop: 0,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerShown: true,
          headerTitle: "History",
          headerTitleStyle: {
            color: colorScheme == 'dark' ? 'black' : '#aaa',
          },
          headerStyle: {
            backgroundColor: Colors.mainAppColor,
          },
          tabBarIcon: ({ color }) => <Ionicons size={22} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          sceneStyle: {
            paddingTop: 0,
            backgroundColor: Colors[colorScheme ?? 'light'].background
          },
          headerShown: true,
          headerTitle: "More",
          headerTitleStyle: {
            color: colorScheme == 'dark' ? 'black' : '#aaa',
          },
          headerStyle: {
            backgroundColor: Colors.mainAppColor,
          },
          tabBarIcon: ({ color }) => <Ionicons size={22} name="ellipsis-vertical" color={color} />,
        }}
      />
    </Tabs>
  );
}