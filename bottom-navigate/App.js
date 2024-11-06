import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from './navigate/HomeStack';
import SettingStack from './navigate/SetingStack';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Return the appropriate icon based on the route name
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2f95dc', // Active tab color
          tabBarInactiveTintColor: 'gray',   // Inactive tab color
          tabBarStyle: {
            backgroundColor: '#f8f8f8',
            paddingBottom: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
        <Tab.Screen name="Setting" component={SettingStack} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
