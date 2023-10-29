import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/'

export default function App() {

  const [data, setData] = React.useState({})

  const handleTextChange = ({ name="", value="" })=> {
    setData({...data, [name]: value})
  }

  const handleSubmit = ()=> {
    console.log('data :>> ', data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style ={styles.welcome_title} >Hello there, welcome!</Text>
      <Text style ={styles.welcome_txt} >Sign Up to get started, we are really excited to have you here among us 😊.</Text>

      <TextInput style={styles.input}  placeholder="Enter your username" onChangeText={(val)=> handleTextChange({ name: "username", value: val })} />
      <TextInput style={styles.input} keyboardType='email-address' placeholder="Enter your email" onChangeText={(val)=> handleTextChange({ name: "email", value: val })}  />
      <TextInput style={styles.input}  placeholder="Enter your gender" onChangeText={(val)=> handleTextChange({ name: "gender", value: val })}  />
      <TextInput style={styles.input} secureTextEntry placeholder="Enter your password" onChangeText={(val)=> handleTextChange({ name: "password", value: val })}  />

      <TouchableOpacity onPress={handleSubmit} style={styles.sign_up_button} >
        <Text style={styles.button_txt}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 15
  },

  welcome_title: {
    fontSize: 38,
    fontWeight: "900",
    color: "dodgerblue"
  },

  welcome_txt: {
    fontSize: 17,
    color: "#70707090"
  },

  input: {
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 45
  },

  sign_up_button: {
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  button_txt: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20
  }
});
