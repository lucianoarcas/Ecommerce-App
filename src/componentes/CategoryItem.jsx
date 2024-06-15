import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category, navigation}) => {
  return (
    <Card style={styles.cardContainer}>
        <Pressable style={styles.Pressable} onPress={()=> navigation.navigate('ItemListCategory', {category})} >
            <Text style={styles.text} > {category} </Text>
        </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({

    Pressable:{
        color:"black",
    },

    cardContainer: {
        marginHorizontal: 10, 
        marginVertical: 10,
        backgroundColor:"black",
        color:"goldenrod",
    }, 
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: "goldenrod",
    }
})