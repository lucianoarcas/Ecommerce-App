import { StyleSheet, KeyboardAvoidingView, Text, View } from 'react-native'
import React from 'react'
import Search from '../componentes/Search'


const Home = (navigation) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Home</Text>
      <Search/>
    </KeyboardAvoidingView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

})