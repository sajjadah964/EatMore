import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constants/NavigationStrings';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';

const Stack = createNativeStackNavigator();

function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        // <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ presentation: 'card', headerShown: false }}
            initialRouteName={NavigationStrings.INITIAL_SCREEN}
        >
            {user ? MainStack(Stack) : AuthStack(Stack)}
            {/* {AuthStack(Stack)} */}
        </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default Routes;