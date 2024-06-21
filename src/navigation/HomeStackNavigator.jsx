import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/Home";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import ProductItem from '../componentes/ProductItem';
import Login from '../screens/Login';
import ForgotPass from '../screens/Forgotpass';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
      
        <Stack.Navigator
        screenOptions={{headerShown: false}}>

          <Stack.Screen
            name="Home"
            component={Home}
            
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
     
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})