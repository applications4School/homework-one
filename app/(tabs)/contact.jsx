import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { router, Link} from 'expo-router'
import { Asset } from 'expo-asset';
// import {  } from '@react-navigation/native'
// const starbsImg = require("./assets/images/icon.png",);

export default function home() {
  return (
    
    <View style = {styles.container}>
      <View style={styles.greenSquareContainer}>
        <View style={styles.greenSquare} />
        </View>
        <Text style = {styles.helpText}>Have a problem with our service? </Text>
        <Text style = {styles.helpText}>Give us a call at ***-***-****</Text>
        <Text style = {styles.helpText}>Or send a message to us below!</Text>
        <TextInput 
          style = {styles.input}
          placeholder='Type away!'
        ></TextInput>      
        <Pressable style = {styles.messageButton} onPress={() => Alert.alert('Message sent. Thank you for your feedback')}>
        <Text style= {styles.messageText}>Send Message</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 25, 
        backgroundColor: "white",
        

    },

    helpText:{
        fontSize: 24,
        textAlign: 'center',
        color: "#156156",
        // marginTop: 15,
        fontWeight:'bold',
        marginTop: 30,

    },


    greenSquareContainer:{

        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        height: 200,
        width: 350,
    },

    greenSquare:{
        width: 350,
        height:200,
        backgroundColor: 'green',
        

    },

    input: {
      height: 80,
      width: 350,
      borderColor: '#156156',
      borderWidth: 3,
      marginTop: 40,
      paddingHorizontal: 10,
      borderRadius: 0,
    },
    messageButton:{
      backgroundColor: '#156156',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: 350,
      marginTop: 20,
    },

    messageText:{
      color: 'white',
    },


    
})