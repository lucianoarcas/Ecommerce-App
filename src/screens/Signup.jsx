import React from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

const Register = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Register</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          placeholder='Enter your username'
          style={styles.input}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.input}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder='Enter your password'
          style={styles.input}
          secureTextEntry
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable style={styles.button2}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  button2: {
    marginTop: "20%",
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: "40%",
  },
  text: {
    fontSize: 24,
    marginVertical: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
  formContainer: {
    flex: 1,
    alignItems: "start",
    justifyContent: "start",
    width: "85%",
    alignSelf: "center",
    paddingHorizontal: "5%",
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
