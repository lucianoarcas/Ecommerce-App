import { Image, Platform, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable, Button } from 'react-native'
import React from 'react'
import backimg from "../../assets/img/backimg.jpg"
import logo from "../../assets/img/logo.jpg"



const Login = ({navigation, route}) => {


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.pictures}>
        <Image style={styles.backimg} source={backimg}/>
      </View>

      <Image style={styles.logo} source={logo}/>

      <View style={styles.formContainer}>
        <Text style={ styles.SignIn }>Sign In</Text>
        <Text>Email</Text>
        <TextInput style={styles.input}/>
        <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input}/>
        <Pressable style={styles.Pressable} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable style={styles.Pressable2} onPress={() => navigation.navigate('Forgotpass')}>
          <Text style={styles.buttonText}>Forgot Password?</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

  Pressable2:{
    marginTop:"12%",
    color:"lightblue",
    backgroundColor:"blue",
    justifyContent:"center",
    height:"12%",
    borderRadius: 10,

  },

  Pressable:{
    color:"lightblue",
    backgroundColor:"blue",
    justifyContent:"center",
    height:"15%",
    borderRadius: 10,

    },
  container: {
    flex: 1,
  },
  pictures:{
    backgroundColor: "blue",
    justifyContent: "flex-start",
    height: "30%",
  },  
  SignIn:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  backimg: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    alignSelf: "center",
    width: "36%",
    height: undefined,
    aspectRatio: 1,
    marginTop: -40,
    marginBottom: 10,
    borderRadius: 80,
  },
  formContainer:{
    alignSelf: "center",
    width: "80%",
    backgroundColor: "F5FCFF",
    padding: 20,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});