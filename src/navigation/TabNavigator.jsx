import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>

        <Tab.Screen
        name="Store"
        component={HomeStackNavigator}
        options={{ tabBarIcon: ({ focused })=> {
            return (
                <Entypo name="home" size={24} color={focused ? "black" : "grey"} />
            )
        }}}>

        </Tab.Screen>

        <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{ tabBarIcon: ({ focused })=> {
            return (
                <Entypo name="shopping-cart" size={24} color={focused ? "black" : "grey"} />
            )
        }}}>

        </Tab.Screen>

        <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{ tabBarIcon: ({ focused })=> {
            return (
                <Entypo name="text-document" size={24} color={focused ? "black" : "grey"}  />
            )
        }}}>

        </Tab.Screen>
        


    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})