import React from "react";
import TabRoutes from './TabRoutes';
import NavigationStrings from "../constants/NavigationStrings";
import { Checkout, ItemsDetails, OrderInformation, } from "../Screen";
export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigationStrings.HOME}
                component={TabRoutes}
            />
            <Stack.Screen
                name={NavigationStrings.ITEMS_DETAILS}
                component={ItemsDetails}
            />
            <Stack.Screen
                name={NavigationStrings.CHECKOUT}
                component={Checkout}
            />
            <Stack.Screen
                name={NavigationStrings.ORDER_INFORMATION}
                component={OrderInformation}
            />

            {/* <Stack.Screen
                name={NavigationStrings.ADD_TO_CART}
                component={AddToCart}
            /> */}
        </>
    )

}