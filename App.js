import 'react-native-gesture-handler';
import {useState, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,  Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { Entypo } from '@expo/vector-icons';
import { AuthProvider } from './src/authContext/Auth';

export default function App() {
  return (
    
    <AuthProvider>
      <Navigator />
    </AuthProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
