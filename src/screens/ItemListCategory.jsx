import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Search from '../componentes/Search'
import ProductItem from '../componentes/ProductItem'

import products from "../data/products.json"
import { useGetProductsByCategoryQuery } from '../../services/shopServices'

const ItemListCategory= ({navigation, route}) => {

  const [keyWord, setKeyword] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  const { category: categorySelected } = route.params;

const {data: productsFetched, isError, isLoading} = useGetProductsByCategoryQuery(categorySelected)

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
    if (!isLoading){
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError('')

      
    }
  }, [keyWord, categorySelected, productsFetched, isLoading])

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