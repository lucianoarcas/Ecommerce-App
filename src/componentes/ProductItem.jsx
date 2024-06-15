import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({product, navigation}) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
      style={styles.Pressable}
      onPress={()=> navigation.navigate('ItemDetail', {productoId: product.id})}>
        <View style={styles.details}>
            <Text style={styles.textCategory}>{product.title}</Text>
            
        </View>

        <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: product.thumbnail}}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({

    details:{
        backgroundColor:"lightblue",
        width:"66%"
    },  

    image: {
        width: "33%",
        borderRadius: 8,
        
      },
      additionalStylesCard: {
        backgroundColor:"grey",
        height: 120,
        width: 300,
        margin: 10,
        paddingHorizontal: 0,
        justifyContent: "space-between",
        flexDirection: "row",
      },
      textCategory: {
        color: "goldenrod",
        width: '100%',

      },

      Pressable:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"blue",
        width:300,
        height:120,
        paddingHorizontal:5,
        paddingVertical:5,
      }

})