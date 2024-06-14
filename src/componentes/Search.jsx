import 'react-native-gesture-handler';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native'
import {useState} from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";



const Search = ({ onSearch = () => {}, error = ''}) => {

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
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome6 name="eraser" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      },
      inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 4,
        width: "65%",
      },
      input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: "grey",
        color: "grey",
        borderRadius: 10,
      },
      errorText: {
        color: "black",
        fontSize: 16,
        fontFamily: "Josefin",
      },
})