import React, {useState} from 'react';
import { View, FlatList } from 'react-native';
import ChatroomItem from './ChatroomItem'

function ChatroomScreen() {
    const [chatRooms, setCharRoom] = useState(
        [
            {id: "1", name: "The developers lounge"},
            {id: "2", name: "Code chat"}
        ]
    )

    return (
        <View>
            <FlatList
        data={chatRooms}
        renderItem={({item}) => <ChatroomItem item={item}/>}
        />
        </View>
    );
}

export default ChatroomScreen;