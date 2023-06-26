import React from 'react'
import { Text, View,Image } from 'react-native'
import ChatRooms from '../../data/ChatRooms'
import { Chatroom } from '../../types'
import styles from './styles'

// import { Avatar } from 'react-native-elements/dist/avatar/Avatar'

export type ChatListItemProps = {
    chatRoom: Chatroom
}

const ChatListItem = (props:ChatListItemProps) => {

    const {chatRoom} = props ;
    // const user = chatRoom.users[1];
    return (
        <View>
            <Image style={styles.avatar} source={{uri: chatRoom.users[0].imageUri}} />
            <Text>{chatRoom.lastMessage.content}</Text>
            <Text>{chatRoom.users[1].name}</Text>
        </View>
    )
}

export default ChatListItem
