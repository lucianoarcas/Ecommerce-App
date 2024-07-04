import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category, navigation}) => {
  return (
    <Pressable style={styles.Pressable} onPress={()=> navigation.navigate('ItemListCategory', {category})} >
        
            <Text style={styles.text} > {category} </Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({

    Pressable:{
        color:"black",
        margin:"2.5%",
        height:200,
        width:"45%",
        backgroundColor:"goldenrod",
        borderRadius:10,
        justifyContent:"center",
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        color: "black",
        fontWeight:"bold",
    }
})