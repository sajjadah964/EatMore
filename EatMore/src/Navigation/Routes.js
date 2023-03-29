import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ presentation: 'card', headerShown: false }}
                initialRouteName={NavigationStrings.INITIAL_SCREEN}
            >
                {MainStack(Stack)}
                {/* {AuthStack(Stack)} */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;