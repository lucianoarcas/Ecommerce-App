import { StyleSheet, KeyboardAvoidingView, Text, View, FlatList } from 'react-native'
import React from 'react'
import Search from '../componentes/Search'
import CategoryItem from '../componentes/CategoryItem'
import categories from "../data/categories.json"


const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      
      <View style={styles.flatListContainer}>
        <FlatList
          keyExtractor={(category) => category}
          data={categories}
          renderItem={({item}) => (
            <CategoryItem category={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
  },

  flatListContainer: {
    width: "100%",
    backgroundColor: "grey",
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

})