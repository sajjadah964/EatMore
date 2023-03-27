import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../Screen';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                presentation: 'modal',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarLabel: ({ focused, }) => {

                }
            }}
        >
            <Stack.Screen name={NavigationStrings.PROFILE} component={Profile} />
        </Stack.Navigator>
    )
}

export default ProfileStack;

// const styles = StyleSheet.create({})