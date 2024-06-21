import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../componentes/Search'
import ProductItem from '../componentes/ProductItem'

import products from "../data/products.json"

const ItemListCategory= ({navigation, route}) => {

  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  const { category: categorySelected } = route.params;

  useEffect(()=>{
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyWord);
    if (hasDigits) {
      setError("Don't use digits");
      return;
    }

    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);

    if(!hasThreeOrMoreChar && keyWord.length){
      setError("Type 3 or more characters")
      return;
    }

    console.log(error)

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );

    console.log(productsPreFiltered)

    const productsFilter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    setProductsFiltered(productsFilter);
    setError('')
  }, [keyWord, categorySelected])

  return (
    <View style={styles.container}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        keyExtractor={(products) => products.id} 
        renderItem={({item}) => <ProductItem product= {item} navigation={navigation} />}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },

})