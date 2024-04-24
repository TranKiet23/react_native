import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'

const SysGlobal = ({ visible }) => {
  return (visible ? (
    <Modal visible={visible} transparent={true}>
      <View style={{flex: 1,
        backgroundColor: "rgba(00,00,00,0.5)",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{backgroundColor: 'white',
      padding: 10, height: 60, width: 60, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      </View>
    </Modal>) : ""
  )
}

export default SysGlobal