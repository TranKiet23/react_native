import React from 'react'
import { View, Text, FlatList, Image, TextInput,TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLists, getProfiles } from '../api';
import moment from 'moment'
import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome";
function UserManage() {
  const [token, setToken] = useState('')
  const [list, setList] = useState([])
  const [profiles, setProfiles] = useState([])
  const [keySearch, setKeySearch] = useState('')
  const getList = async () => {
    const params = `?limit=10&page=1`
    await getLists(token, params)
      .then((res) => {
        setList(res.data.data)
      })
      .catch((error) => {

      })
      .finally(() => {

      });
  };
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
    getList()
    getDataDefault()
  }, [token])

  const handleChangeSearch = value => {
    setKeySearch(value)

  }

  const onDelete = (id) => {
    const dataClone = _.cloneDeep(list)
    const index = dataClone.findIndex(item => item.id !== id);
    dataClone.splice(index, 1);
    setList(dataClone)
  } 

  return (
    <View>
      {/* search bar */}
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff' }}>
          <TextInput value={keySearch} onChangeText={handleChangeSearch} style={{ flex: 1, marginLeft: 10, borderRadius: 5 }} placeholder='Enter key search' />
          <Icon style={{ padding: 10 }} size={18} name="search" />
        </View>
      </View>
      <FlatList refreshing={false} onPress={() => getList()} data={list.filter(ele => ele.name.search(keySearch) > -1)} keyExtractor={item => item.id.toString()} renderItem={({ item }) => {
        return (
          <View style={{ padding: 15, backgroundColor: '#fff', margin: 10, flexDirection: 'row', borderRadius: 10 }}>
            <Image style={{ width: 80, height: 80 }} source={{ uri: profiles.image }} />
            <View style={{ paddingLeft: 20, flex: 1 }}>
              <Text style={{ color: '#2E86C1', fontSize: 20, fontWeight: '600', marginBottom: 8, }}>{item.name}</Text>
              <Text style={{ color: 'grey', marginBottom: 5 }}>{item.vehicle_type}</Text>
              <Text style={{ color: 'grey', marginBottom: 5 }}>{moment(item.created_at).format('DD/MM/YYYY HH:mm')}</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => {onDelete(item.id)}} style={{backgroundColor:'red',  padding: 6, with: 25, height: 25, justifyContent: 'center', borderRadius: 5}}>
                <Icon name="trash" size={14} color={'white'} />

              </TouchableOpacity>
            </View>
          </View>)
      }} />
    </View>
  )
}

export default UserManage
