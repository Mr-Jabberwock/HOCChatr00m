import React, {useState} from 'react';
import {View, FlatList} from 'react-native'
import OpenChatMessage from './OpenChatMessage'

function OpenChatScreen(props) {
    const [messages, getMessages] = useState(
        [
            {id: "1", message: "Heyo in the chat, this is the first message", name: "Flynn", isUser: false},
            {id: "2", message: "Darn it! I wanted to be first. Oh well", name: "James", isUser: true}
        ]
    )
    return (
        <View>
            <FlatList 
            data={messages}
            renderItem={({item}) => <OpenChatMessage item={item}/>}
            />

        </View>
    );
}

export default OpenChatScreen;