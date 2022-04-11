import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StartScreen({navigation}) {
    return (
        <SafeAreaView>
            <Button 
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />

            <Button 
                title="Sign up"
                onPress={() => navigation.navigate('Signup')}
            />
        </SafeAreaView>

    );
}