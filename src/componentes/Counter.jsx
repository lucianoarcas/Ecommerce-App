import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import { increment, decrement, reset } from '../features/CounterSlice'; // Importa las acciones de counterSlice
import { addToCart } from "../features/CartSlice"; // Importa la acción de cartSlice

const Counter = ({ product }) => { // Recibe el producto como prop
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: count
    };
    dispatch(addToCart(item));
    dispatch(reset());
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer1}>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.span}>{count}</Text>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.button}
        onPress={addItemToCart}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default Counter

const styles = StyleSheet.create({
    container: {
      width: '80%',
      backgroundColor: 'black',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: "2%",
    },
    buttonsContainer1: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      marginBottom: 10,
    },
    buttonsContainer2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'goldenrod',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    span: {
      color: 'goldenrod',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      width: '30%',
    },
    spanInput: {
      backgroundColor: 'grey', 
      color: 'black', 
      borderRadius: 5,
      padding: 10,
      width: '65%',
      marginRight: 10,
    },
  });