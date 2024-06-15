import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import {useState, useEffect} from 'react'

import allProducts from "../data/products.json"

const ItemDetail = ({navigation, route}) => {

  const [product, setProduct] = useState(null);

  const {productoId: idSelected} = route.params

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );

    setProduct(productSelected);
  }, [idSelected]);


  return (
    <View>
    <Button onPress={()=> navigation.goBack()} title="Back" />
      {product ? (
        <View>
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="cover"
          />
          <View>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart"></Button>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },

  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right"
  }

})