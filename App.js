import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OpenChatScreen from "./app/assets/screens/OpenChatScreen";
import LoginScreen from "./app/assets/screens/LoginScreen";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import  firebase from 'firebase';
//import { Firebase } from 'react-native-firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC8yghopGsaz5uMDzkIvNAgrqtLhxCfchk",
  authDomain: "hocchatr00m.firebaseapp.com",
  projectId: "hocchatr00m",
  storageBucket: "hocchatr00m.appspot.com",
  messagingSenderId: "983659102155",
  appId: "1:983659102155:web:fa63ddbeaac12eb6cb004e",
  measurementId: "G-2ZBLX8KWDM"
};

if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={LoginScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 60
  }
})
