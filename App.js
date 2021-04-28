import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OpenChatScreen from "./app/assets/screens/OpenChatScreen";


export default function App() {

  return (
    <View style={styles.container}>
      <OpenChatScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 60
  }
})
