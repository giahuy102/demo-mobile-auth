import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {removeKey} from '../services/JWTStorage'
export default function Homepage({route, navigation}) {
    const {username} = route.params;

    const handleLogout = () => {
        removeKey('jwt-token');
        navigation.popToTop();
    }
    return (
        <View style={ {flex: 1, justifyContent: "center", alignItems: "center"} }>
            <Text>Hello {username}</Text>
            <Button 
                title="Logout"
                onPress={handleLogout}
            />
        </View>
        

    );
}