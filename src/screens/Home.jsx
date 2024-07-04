import { StyleSheet, KeyboardAvoidingView, Text, View, FlatList } from 'react-native'
import React from 'react'
import Search from '../componentes/Search'
import CategoryItem from '../componentes/CategoryItem'
import { useGetCategoriesQuery } from '../../services/shopServices'



const Home = ({navigation, route}) => {

  const {data: categories} = useGetCategoriesQuery()
  
  return (

      
      <View style={styles.flatListContainer}>
        <FlatList
          keyExtractor={(category) => category}
          data={categories}
          numColumns={2}
          renderItem={({item}) => (
            <CategoryItem category={item} navigation={navigation} />
          )}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  flatListContainer: {
    height:"100%",
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

})