import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login';
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import Forgotpass from './src/screens/Forgotpass';
import ItemListCategory from "./src/screens/ItemListCategory";
import ItemDetail from "./src/screens/ItemDetail";
import ProductItem from './src/componentes/ProductItem';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      
        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
          />

          <Stack.Screen
            name="Forgotpass"
            component={Forgotpass}
          />

          <Stack.Screen
            name="ItemListCategory"
            component={ItemListCategory}
          />

          <Stack.Screen
            name="ItemDetail"
            component={ItemDetail}
          />

        </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})