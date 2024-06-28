import { View, Text, UseState, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeStackNavigator from './HomeStackNavigator'
import TabNavigator from './TabNavigator'
import Login from '../screens/Login'
import { AuthContext } from '../authContext/Auth'
import { useContext } from 'react'


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );

  const AppStackScreen = () => (
    <AppStack.Navigator>
      <AppStack.Screen name="Store" component={TabNavigator} options={{ headerShown: false }} />
    </AppStack.Navigator>
  );



const Navigator = () => {

    const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
        {!isAuthenticated ? (<AuthStackScreen/>) : (<AppStackScreen/>)}
    </NavigationContainer>
  )
}

export default Navigator