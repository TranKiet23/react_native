import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getProfiles } from '../api';
import { useNavigation } from '@react-navigation/native';
function UserInfo() {
    const [token, setToken] = useState('')
    const [profiles, setProfiles] = useState([])
    const navigate = useNavigation()
    const getDataDefault = async () => {
      await getProfiles(token)
        .then((res) => {
          setProfiles(res.data.data)
        })
        .catch((error) => {
  
        })
        .finally(() => {
  
        });
    };
    useEffect(() => {
      AsyncStorage.getItem("token").then(result => {
        setToken(result)
      });
      if (token) {
        setTimeout(() => {
          getDataDefault()
        }, 100);
      }
    }, [token])
  
    const onLogout = () => {
      AsyncStorage.clear();
      setToken("")
      navigate.navigate("Login")
    }
    return (
      <View style={{
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10
      }}>
        <View>
          <Text>
            usser name : {profiles.user_name}
          </Text>
          <Text>
            email : {profiles.email}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              padding: 10,
              borderRadius: 10,
              marginTop: 15,
              justifyContent:'center',
              alignItems:'center'
            }}
            onPress={onLogout}>
              <Text style={{fontSize: 16, color: '#f5f5f5'}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default UserInfo
