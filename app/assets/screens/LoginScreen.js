import React from 'react';
import { TextInput, View } from 'react-native';


function LoginScreen(props) {
    return (
        <View>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password"/>
        </View>
    );
}

export default LoginScreen;