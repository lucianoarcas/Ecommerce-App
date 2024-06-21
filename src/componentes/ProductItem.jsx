import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({product, navigation}) => {
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('ItemDetail', { productId: product.id })}
      >
        <View style={styles.details}>
          <Text style={styles.textCategory}>{product.title}</Text>
        </View>

        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.thumbnail }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  additionalStylesCard: {
    backgroundColor: 'black', // Fondo principal en negro
    height: 120,
    width: '100%',
    margin: 10,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 8,
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black', // Fondo de área presionable en negro
    width: '100%',
    height: 120,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  details: {
    backgroundColor: 'goldenrod', // Fondo del contenedor de detalles en goldenrod
    width: '65%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  image: {
    width: '32%',
    borderRadius: 8,
  },
  textCategory: {
    color: 'black', // Texto en color negro para contrastar con fondo goldenrod
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
});