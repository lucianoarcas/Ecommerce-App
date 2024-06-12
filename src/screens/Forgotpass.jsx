import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      <View style={styles.formContainer}>
        <Text>Email</Text>
        <TextInput
          placeholder='Enter your email'
          style={styles.input}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    backgroundColor: "grey",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
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
