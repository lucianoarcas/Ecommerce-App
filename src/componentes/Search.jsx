import 'react-native-gesture-handler';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native'
import {useState} from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';



const Search = ({ onSearch = () => {}, error = '', goBack = () => {}} ) => {

const [keyword, setKeyword] = useState("");


  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={24} color="goldenrod" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome6 name="eraser" size={24} color="goldenrod" />
      </Pressable>
      <Pressable onPress={goBack}>
        <Entypo name="back" size={24} color="goldenrod" />
      </Pressable>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    backgroundColor: 'black', // Fondo principal en negro para paleta oscura
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 4,
    width: '65%',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 18,
    backgroundColor: 'grey', // Fondo del input en gris oscuro
    color: 'black', // Color del texto en negro para contraste
    borderRadius: 10,
  },
  errorText: {
    color: 'red', // Color del texto de error en rojo
    fontSize: 18,
    marginTop: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})