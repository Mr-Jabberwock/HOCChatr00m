import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function OpenChatMessage({item}) {
    return (
        <View style={styles.messages}>
           <View style={item.isUser ? styles.fromUser : styles.fromChat}>
                <Text>{item.message}</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
   messages: {
       marginBottom: 20,
       height: 50,
   },
   fromChat: {
      flexDirection: 'row',
      alignItems: "flex-start",
      backgroundColor: "lightgrey"
   },
   fromUser: {
    flexDirection: 'row',
    alignItems: "flex-end",
      backgroundColor: "lightblue",
      
   }
})

export default OpenChatMessage;