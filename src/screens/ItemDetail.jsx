import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import {useState, useEffect} from 'react'

import allProducts from "../data/products.json"
import Counter from '../componentes/Counter';

const ItemDetail = ({navigation, route}) => {

  const [product, setProduct] = useState(null);

  const {productId: idSelected} = route.params

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );

    setProduct(productSelected);
  }, [idSelected]);

  console.log(product)

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
          <Counter/>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
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