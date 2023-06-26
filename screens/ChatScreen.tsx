import * as React from 'react';
import { StyleSheet } from 'react-native';

import ChatListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../data/ChatRooms';

export default function ChatScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
     <ChatListItem chatRoom={ChatRooms[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
