import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../Screen';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
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
            <Stack.Screen name={NavigationStrings.SEARCH} component={Search} />
        </Stack.Navigator>
    )
}

export default SearchStack;

// const styles = StyleSheet.create({})