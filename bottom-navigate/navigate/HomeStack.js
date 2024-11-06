import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function HomeStack() {
    const HomeStackScreen = createNativeStackNavigator()

    return (
        <HomeStackScreen.Navigator
            screenOptions={{
                headerTitleAlign: 'center',  // Center the title
                headerStyle: {
                    backgroundColor: '#f8f8f8',
                },
                headerTintColor: '#333',
            }}>
            <HomeStackScreen.Screen name='Home' component={HomeScreen} options={{title:"Homes"}}/>
            <HomeStackScreen.Screen name='Details' component={DetailsScreen} />
        </HomeStackScreen.Navigator>
    )
}
