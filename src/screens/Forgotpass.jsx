import React from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

const ForgotPassword = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.input}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
 

  button2:{
    marginTop:"20%",
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width:"40%",

  },  

  text:{
    fontSize:25,
    marginVertical:"10%",
  },

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  formContainer: {
    flex: 1,
    alignItems: "start",
    justifyContent: "start",
    width: "85%",
    alignSelf: "center",
    paddingHorizontal:"5%",
    },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
