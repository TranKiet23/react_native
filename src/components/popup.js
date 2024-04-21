import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from 'react'

export default function Popup(props) {
    let { message, isPopup, onHide} = props
 
    return (
        <Modal visible={isPopup} transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: "rgba(00,00,00,.5)", padding: 20 }}>
                <View style={{ width: '100%', backgroundColor: "#fff", borderRadius: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'red' }}>Warning</Text>
                    </View>
                    {/* body */}
                    <View style={{justifyContent: 'center', alignItems: 'center', padding: 10, marginHorizontal: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '400'}}>{message}</Text>
                    </View>
                    {/* footer */}
                    <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={onHide} style={styles.button}>
                            <Text style={{color: '#fff', fontSize: 18}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#1dcaff',
        borderRadius: 10,
        padding: 5,
        width: '20%',
    },
})


