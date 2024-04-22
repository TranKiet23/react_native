import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getProfiles } from '../api';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import UserInfo from '../user_info';
import Settings from '../settings';


const HomeScreen = () => {
 const Tab = createBottomTabNavigator();
 return (
  <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
    <Tab.Screen options={{ headerShown: false,tabBarIcon: ({color, size})=><Icon name="user" color={color} />}} name="users" component={UserInfo} />
    <Tab.Screen options={{ headerShown: false,tabBarIcon: ({color, size})=><Icon name="cog" color={color} />}} name="settings" component={Settings} />

  </Tab.Navigator>
 )
  
}
export default HomeScreen;