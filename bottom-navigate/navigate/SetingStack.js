import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SettingScreen from '../screens/SettingScreen'
import DetailsScreen from '../screens/DetailsScreen'

export default function SetingStack() {
    const SettingsStack = createNativeStackNavigator()

    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    )
}
