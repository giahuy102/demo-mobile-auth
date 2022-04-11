import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Homepage() {
    return (
        <View style={ {flex: 1, justifyContent: "center", alignItems: "center"} }>
            <Text>This is home</Text>
        </View>
        

    );
}