import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import Popup from "../components/popup"
import SysGlobal from "../components/global"

import { loginUser } from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [isPopup, setIsPopup] = useState(false)
    const [error, setSerror] = useState("")
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)

    const   onChangeUserName = (value) => {
        setUsername(value)
    }

    const   onChangePassword = (value) => {
        setPassword(value)
    }

    const showPopup = () => {
        setIsPopup(false)
    }
    const onClickLogin = () => {
        if(!username.length || !password.length){
            setIsPopup(true)
            setSerror("Please input login info")
            return
        }
        signin()
      
    }
    const signin = async () => {
        setIsLoading(true)
        const dataSubmit = {
            email : username,
            password: password
        }
        await loginUser(dataSubmit)
        .then((res) => {
            AsyncStorage.setItem("token", res.data.data.token);
            navigation.navigate("Home");
            setIsLoading(false)
        })
        .catch((error) => {
            setIsPopup(true)
            setSerror(error.response.data.error.message || error.message)
        }).finally(
        )
    }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <SysGlobal visible={isLoading} />
        <Popup message={error} isPopup={isPopup} onHide={showPopup} />
            <View style={styles.wrapContainer}>

                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.textLogin}>Login</Text>
                </View>
                {/* body */}
                <View style={styles.body}>
                    {/* usser Name */}
                    <View style={{ margin: 20 }}>
                        <Text style={{ color: "#333" }}>User Name</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                borderBottomColor: "grey",
                                borderBottomWidth: 1,
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    padding: 10,
                                }}
                            >
                                <Icon name="user" size={15} style={{ color: "gray" }} />
                            </View>
                            <View>
                                <TextInput
                                    value={username}
                                    onChangeText={onChangeUserName}
                                    placeholder="Type your username"
                                    style={styles.customInput}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Password */}
                    <View style={{ margin: 20 }}>
                        <Text style={{ color: "#333" }}>Password</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                borderBottomColor: "grey",
                                borderBottomWidth: 1,
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    padding: 10,
                                }}
                            >
                                <Icon size={15} name="lock" style={{ color: "gray" }} />
                            </View>
                            <View>
                                <TextInput
                                    value={password}
                                    onChangeText={onChangePassword}
                                    secureTextEntry={true}
                                    placeholder="Type your password"
                                    style={styles.customInput}
                                />
                            </View>
                        </View>
                    </View>
                    {/* forget password */}
                    <View
                        style={{ marginTop: 10, paddingRight: 5, alignItems: "flex-end" }}
                    >
                        <Text style={{ color: "#333" }}>Forget Password ?</Text>
                    </View>
                    {/* login */}
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginVertical: 20,
                        }}
                    >
                        <TouchableOpacity style={styles.button} onPress={onClickLogin}>
                            <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.formInput}></View>
                    <View style={styles.groupIcon}>
                        <Text>Or Sign Up Using</Text>
                        <View style={styles.icons}>
                            <TouchableOpacity style={styles.iconFB}>
                                <Icon name="facebook" size={20} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconTwitter}>
                                <Icon name="twitter" size={20} color="#fff" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconGoogle}>
                                <Icon name="google" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Text>Or Sign Up Using</Text>
                    <View>
                        <TouchableOpacity style={styles.btnSignUp}>
                            <Text>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3498DB",
    },
    wrapContainer: {
        backgroundColor: "#fff",
        margin: 10,
        flex: 1,
        borderRadius: 10,
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textLogin: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
    },

    body: {
        flex: 6,
    },
    formInput: {
        flex: 4,
    },
    customInput: {},
    groupIcon: {
        flex: 2,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    icons: {
        marginTop: 15,
        flexDirection: "row",
    },
    iconFB: {
        width: 35,
        height: 35,
        padding: 10,
        backgroundColor: "#3b5998",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    iconTwitter: {
        width: 35,
        height: 35,
        padding: 10,
        backgroundColor: "#1dcaff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },

    iconGoogle: {
        width: 35,
        height: 35,
        padding: 10,
        backgroundColor: "#EA4335",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },

    footer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    btnSignUp: {
        fontSize: 20,
        fontWeight: 700,
        color: "#333",
        padding: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1dcaff',
        borderRadius: 10,
        padding: 10,
        width: '90%',
    },
});
