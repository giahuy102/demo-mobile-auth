import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthService from '../services/AuthService';

export default function Singup({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const [successful, setSuccessful] = useState(true);
    // const [message, setMessage] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        AuthService.register(
            username, email, password
        ).then(response => {
            // setSuccessful(true);
            navigation.navigate('Login');
            // navigate('/login');
        }).catch(err => { 
            // console.log(4);
            // setSuccessful(false);
            // setMessage(err.response.data);
            console.warn(err.response.data);
            // console.log(3);
            // console.log(err);
        })
    }

    return (
        <SafeAreaView>
            <TextInput 
                placeholder='Enter username'
                onChangeText={ text => setUsername(text) }
            />

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
                onPress={handleRegister}
            />
        </SafeAreaView>
    );
}