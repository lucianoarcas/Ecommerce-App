import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../features/CartSlice"; // Importa las acciones de cartSlice

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState();

  const toggleOptions = (itemId) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemWrapper}>
      <Pressable style={styles.itemContainer} onPress={() => toggleOptions(item.id)}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>x{item.quantity}</Text>
        <Text style={styles.itemText}> ${(item.price * item.quantity).toFixed(2)}</Text>
      </Pressable>
      {selectedItem === item.id && (
        <View style={styles.optionsContainer}>
          <Pressable
            style={styles.optionButton}
            onPress={() => dispatch(removeFromCart(item.id))}
          >
            <Text style={styles.optionButtonText}>Eliminar</Text>
          </Pressable>
          <Pressable
            style={styles.optionButton}
            onPress={() => dispatch(decreaseQuantity(item.id))}
          >
            <Text style={styles.optionButtonText}>Restar</Text>
          </Pressable>
          <Pressable
            style={styles.optionButton}
            onPress={() => dispatch(increaseQuantity(item.id))}
          >
            <Text style={styles.optionButtonText}>Sumar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalAmount}</Text>
      </View>
      <Pressable style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceder al Pago</Text>
      </Pressable>
    </View>
  );
};

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  itemWrapper: {
    marginBottom: 8,
  },
  itemContainer: {
    backgroundColor: 'goldenrod',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    color: '#000',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  optionButton: {
    backgroundColor: 'goldenrod',
    padding: 8,
    borderRadius: 8,
  },
  optionButtonText: {
    color: '#000',
    fontSize: 16,
  },
  totalContainer: {
    backgroundColor: 'goldenrod',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  totalText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: 'goldenrod',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});