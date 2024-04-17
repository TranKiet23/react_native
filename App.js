import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";
const App = () => {
  return (
    <View style={styles.container}>
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
            <View
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.linearGradient}
            >
              <TouchableOpacity>
                <Text style={{color: '#fff', fontSize: 22, paddingHorizontal: 20 }}>LOGIN</Text>
              </TouchableOpacity>
            </View>
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
          <TouchableOpacity style={styles.btnSignUp}>SIGN IN</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

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
  linearGradient: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    width: '90%',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#1dcaff'
    
  },
});
