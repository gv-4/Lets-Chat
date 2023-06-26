import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
// import { View } from '../components/Themed';

import ChatScreen from '../screens/ChatScreen';

import {View,TouchableOpacity} from 'react-native'
import {Octicons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { TabBarIndicator, TabBarItem } from 'react-native-tab-view';
import { color } from 'react-native-reanimated';

import { StyleSheet } from 'react-native';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
       headerStyle:{
          backgroundColor: Colors.light.tint
        },
        headerTintColor: Colors.light.background,
        headerShadowVisible: false,
        headerTitle: 'WhatsApp',
        headerTitleAlign:'left',
        headerTitleStyle: {
          fontWeight:'bold',
        },
        headerRight: () => (
          <View  style={{flexDirection:'row',width:60, justifyContent:'space-between', marginRight:10}}>
             <TouchableOpacity>
               <Octicons name='search' size={23} color='white' />
             </TouchableOpacity>
             <TouchableOpacity>
               <MaterialCommunityIcons name='dots-vertical' size={23} color='white' />
             </TouchableOpacity>
          </View>
        )
    }}
    >
      <Stack.Screen name="Root" component={MainTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


const MainTab= createMaterialTopTabNavigator();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator 
    initialRouteName='Chats'
    screenOptions={{
      tabBarActiveTintColor: Colors.light.background,
      tabBarStyle: {
        backgroundColor: Colors.light.tint
      } ,
      tabBarIndicatorStyle: {
        backgroundColor: Colors.light.background,
        height:3,
      },
      tabBarLabelStyle:{
        fontWeight:'bold',
      }
    }} >
      <MainTab.Screen  name="camera"
        component={TabOneScreen} options={{
          tabBarIcon: ({color}) => <Fontisto name='camera' color={color} size={19} /> ,
          tabBarLabel: () => null ,
      
        }} />
        <MainTab.Screen  name="Chats"
        component={ChatScreen} />
        <MainTab.Screen  name="Status"
        component={TabTwoScreen} />
        <MainTab.Screen  name="Calls"
        component={TabOneScreen} />
    </MainTab.Navigator>
  )
  }   


 
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

