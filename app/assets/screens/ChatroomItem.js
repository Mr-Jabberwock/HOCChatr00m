import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

function ChatroomItem({item}) {
    return (
        <TouchableOpacity style={styles.chatrooms}>
        <View style={styles.chatroomsView}>
           <Text>{item.name}</Text>
           <Icon name="right" size={20}/>
       </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    chatrooms:{
        padding: 15,
        borderWidth: 1,
        backgroundColor: "lightgrey",
        marginBottom: 10
    },
    chatroomsView: {
        flexDirection: "row",
        justifyContent: "space-between"

    }
})

export default ChatroomItem;