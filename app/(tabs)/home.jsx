import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { Asset } from 'expo-asset';
// import {  } from '@react-navigation/native'
// const starbsImg = require("./assets/images/icon.png",);

export default function home() {
  return (
    
    <View style = {styles.container}>
        <Text style = {styles.headerText}>Hello, welcome to Starbucks!</Text>
        <Text style = {styles.secondHeaderText}>We are here to serve you!</Text>
        <View style={styles.greenSquareContainer}>
        <View style={styles.greenSquare} />
        </View>
    
        {/* <Image 
            source = {require('./assets/images/stabsHome.jpg')}
            /> */}
        <Pressable style = {styles.prodButton} onPress={() => {router.push('/products')}}>
            <Text style= {styles.prodText}>Buy some producs!</Text>
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

    headerText:{
        fontSize: 24,
        textAlign: 'center',
        color: "#156156",
        marginTop: 15,
        fontWeight:'bold',
    },

    secondHeaderText:{
        fontSize: 20,
        textAlign: 'center',
        color: "#156156",
        marginTop: 15,
        fontWeight:'bold',
    },

    greenSquareContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    greenSquare:{
        width: 400,
        height:400,
        backgroundColor: 'green',
        

    },

   prodButton:{
        backgroundColor: '#156156',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        width: 350,
        
      },
  
      prodText:{
        color: 'white',
        alignSelf: 'center',
      },
  
})