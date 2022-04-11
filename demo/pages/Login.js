import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthService from '../services/AuthService';

import { storeToken } from '../services/JWTStorage';

export default function Login({navigation}) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        AuthService.login(
            email, password
        ).then(response => {
            // if (response.data.accessToken) {
            //     localStorage.setItem("user", JSON.stringify(response.data));
            // }


            console.log(response.data.accessToken);
            storeToken('jwt-token', response.data.accessToken);
            navigation.navigate('Homepage');
            // navigate('/');
            // console.log(response.data);
        }).catch(err => { 
            // console.log(4);
            // setSuccessful(false);
            // setMessage(err.response.data);
            console.warn(err.response.data);
        })
        // navigation.navigate('Homepage');
    }

    return (
        <SafeAreaView>
            <TextInput 
                placeholder='Enter email address'
                onChangeText={ text => setEmail(text) }
                keyboardType="email-address"
            />

            <TextInput 
                secureTextEntry={true}
                placeholder='Enter password'
                onChangeText={ text => setPassword(text) }
            />
            <Button 
                title="Submit"
                onPress={handleLogin}
            />
        </SafeAreaView>
    );
}