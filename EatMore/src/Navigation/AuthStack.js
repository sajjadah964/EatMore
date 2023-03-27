import React from "react";
import NavigationStrings from "../constants/NavigationStrings";
import { InitialScreen, Login, Signup } from "../Screen";
import TabRoutes from './TabRoutes';
export default function (Stack) {
    return (
        <>
            {/* <Stack.Screen
                name={NavigationStrings.TABROUTES}
                component={TabRoutes}
            /> */}
            <Stack.Screen
                name={NavigationStrings.INITIAL_SCREEN}
                component={InitialScreen}
            />
            <Stack.Screen
                name={NavigationStrings.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={NavigationStrings.SIGNUP}
                component={Signup}
            />
        </>
    )

}