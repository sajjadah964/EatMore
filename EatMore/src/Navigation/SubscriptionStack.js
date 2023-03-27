import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Subscription } from '../Screen';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

const SubscriptionStack = () => {
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
            <Stack.Screen name={NavigationStrings.SUBSCRIPTION} component={Subscription} />
        </Stack.Navigator>
    )
}

export default SubscriptionStack;

// const styles = StyleSheet.create({})