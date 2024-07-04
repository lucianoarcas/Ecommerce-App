import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../screens/Cart"


const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (

   
      <Stack.Navigator
      screenOptions={{headerShown: false}}>

        <Stack.Screen
        name="Carrito"
        component={Cart}/>

      </Stack.Navigator>
   
  )
}

export default CartStackNavigator

const styles = StyleSheet.create({})