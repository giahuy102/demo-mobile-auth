import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './pages/StartScreen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage'
import { useEffect } from 'react';


import { loadToken } from './services/JWTStorage'

import AuthService from './services/AuthService';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }


const Stack = createNativeStackNavigator();


export default function App() {

  // const [startPage, setStartPage] = useState('StartScreen');
  // useEffect(() => {
  //   loadToken().then(value => {
  //     if (value) {
  //       AuthService.getUser(value)
  //       .then(response => {
  //         console.log(response.data);
  //       }).catch(err => {
  //         console.log(err);
  //       })
  //     }
  //   })
  // });bc
;
  const [username, setUsername] = useState('');
  // const test = () => console.log(2);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartScreen' >
        <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
