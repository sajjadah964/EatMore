import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Screen';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
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
            <Stack.Screen name={NavigationStrings.HOME} component={Home} />
        </Stack.Navigator>
    )
}

export default HomeStack;

// const styles = StyleSheet.create({})