import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, Button, TextInput} from 'react-native'
import OpenChatMessage from './OpenChatMessage'
import firebase from 'firebase';

function setMessages(){
    const [messages, setMessages]  = useState(() =>{
        return [
            {id: "1", message: "Heyo in the chat, this is the first message", name: "Flynn", isUser: false},
            {id: "2", message: "Darn it! I wanted to be first. Oh well", name: "James", isUser: true}
        ];
    })

    useEffect(() =>{
        firebase.firestore().collection('chatmessages')
        .onSnapshot(snapshot =>{
        const newMessages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setMessages(newMessages);
    })

    },[])
    return messages;
}


function OpenChatScreen(props) {
    const messages = setMessages();
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);


    function sendMessage(text){
       firebase.firestore().collection("chatmessages").doc()
       .set({message: text})
       
    }
    return (
        <View>
            <FlatList 
            data={messages}
            renderItem={({item}) => <OpenChatMessage item={item}/>}
            />
            <TextInput onChangeText={onChange}/>
            <Button onPress={()=>{sendMessage(text)}} title="button">Send message</Button>
        </View>
    );
}

export default OpenChatScreen;