import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddToCart } from '../Screen';
import NavigationStrings from '../constants/NavigationStrings';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            presentation: 'modal',
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
            tabBarLabel: ({ focused, }) => {

            }
        }}
        >
            <Stack.Screen name={NavigationStrings.ADD_TO_CART} component={AddToCart} />
        </Stack.Navigator>
    )
}

export default CartStack;

// const styles = StyleSheet.create({})