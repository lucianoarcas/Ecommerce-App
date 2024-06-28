import 'react-native-gesture-handler';
import {useState, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,  Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Entypo } from '@expo/vector-icons';
import { AuthProvider } from './src/authContext/Auth';

import { Provider } from 'react-redux';
import store from './src/store';
export default function App() {
  return (
    
    <AuthProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </AuthProvider>
    
  );
}
