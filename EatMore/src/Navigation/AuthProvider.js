import React, { createContext, useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import NavigationStrings from '../constants/NavigationStrings';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation}) => {
    const [user, setUser] = useState(null);
    const { navigate } = useNavigation();

    // useEffect(() => {
    //     // This effect will run when the component mounts, and whenever the `user` state changes
    //     if (!user) {
    //         navigate(NavigationStrings.LOGIN);
    //     } else {
    //         // navigate(NavigationStrings.LOGIN);
    //     }
    // }, [user]);

    const handleLogin = async (email, password) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.log(e);
        }
    };

    const handleRegister = async (email, password) => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            setUser(null); // This line resets the `user` state, which will trigger the useEffect hook to navigate to the LOGIN screen
        } catch (e) {
            console.log(e);
        }
    };

    const handleLogout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: handleLogin,
                register: handleRegister,
                logout: handleLogout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
