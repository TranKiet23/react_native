import React from "react";
import Login from "../login";
import HomeScreen from "../home";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserInfo from "../user_info";

let MainScreen = () => {
  let Stack = createNativeStackNavigator();
  const [token, setToken] = useState('')
  useEffect(() => {
    AsyncStorage.getItem("token").then(result => {
      setToken(result)
    });
   
  }, [token])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} /> 
        <Stack.Screen name="Home" component={HomeScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
