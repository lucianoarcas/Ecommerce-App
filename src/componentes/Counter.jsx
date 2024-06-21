import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import {useState} from 'react'

const Counter = () => {

    const [inputToAdd, setInputToAdd] = useState(null);
  
    let count = 0
  
    console.log(count);
  
    return (
    <View style={styles.container}>
        <View style={styles.buttonsContainer1}>
          <Pressable
            style={styles.button}
            onPress={() => console.log("Decrement")}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.span}>{count}</Text>
          <Pressable
            style={styles.button}
            onPress={() => console.log("Increment")}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <View style={styles.buttonsContainer2}>
          <TextInput
            placeholder="Cantidad a aumentar"
            style={styles.spanInput}
            onChangeText={setInputToAdd}
            value={inputToAdd}
          />
          <Pressable
            style={styles.button}
            onPress={() => console.log('Incremento por cantidad')}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
        {/* <Pressable style={styles.button} onPress={() => console.log("Borrar")}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable> */}
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