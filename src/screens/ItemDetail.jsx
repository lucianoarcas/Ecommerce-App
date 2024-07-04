import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import {useState, useEffect} from 'react'
import { Entypo } from '@expo/vector-icons';
import allProducts from "../data/products.json"
import Counter from '../componentes/Counter';
import { reset } from '../features/CounterSlice';
import { useGetProductByIdQuery } from '../../services/shopServices';

const ItemDetail = ({navigation, route}) => {

  const {productId: idSelected} = route.params

  const {data: product, isLoading, isError} = useGetProductByIdQuery(idSelected)


  return (
    <View style={styles.mainContainer}>


      {product ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title} >{product.title}</Text>
            <Text style={styles.text} >{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
          <Counter product={product}/>
          <Pressable style={styles.button} onPress={() => navigation.goBack() && {reset}}>
            <Text>BACK</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    backgroundColor:"black",
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:"auto",
    alignSelf: 'center',
    aspectRatio: 1.3,
    backgroundColor:"black",
  },
  textContainer: {
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor:"black",
    marginBottom:10,

  },
  title:{
    color:"goldenrod",
    fontSize:34,
    fontWeight:"bold",
  },  

  price: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    color:"goldenrod",
  },

  button: {
    backgroundColor: 'goldenrod',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',

  },

  text:{
    color:"goldenrod",
    marginTop:20,
  }
});