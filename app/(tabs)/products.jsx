import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import React from 'react'

export default function products() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.headerText}>What would you like to drink or eat?</Text>
      {/* <Image 
            source = {require('./assets/images/stabsHome.jpg')}
            /> */}
      <View style={styles.squareContainer}>
        <View style={[ styles.greenSquare]} >
        <Text style = {styles.price}>$4.25</Text>

        <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
        <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.blueSquare]}>
          <Text style = {styles.price}>$2.39</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
        <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.redSquare]} >
          <Text style = {styles.price}>$6.01</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
        <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.yellowSquare]}>
          <Text style = {styles.price}>$4.99</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
        <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.greenSquare]} >
        <Text style = {styles.price}>$4.30</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
            <Text style= {styles.orderText}>Order!</Text>
          </Pressable>

        </View>
        <View style={[ styles.blueSquare]}>
        <Text style = {styles.price}>$4.00</Text>
        <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
          <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.redSquare]} >
          <Text style = {styles.price}>$6.50</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!' )}>
          <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
        <View style={[ styles.yellowSquare]}>
          <Text style = {styles.price}>$7.20</Text>
          <Pressable style = {styles.orderButton} onPress={() => Alert.alert('Order placed!')}>
            
          <Text style= {styles.orderText}>Order!</Text>
        </Pressable>

        </View>
      </View>
    </View>
  </ScrollView>
         
         
    
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
        fontWeight: 'bold',

    },

    squareContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        marginTop: 40,
        // height: 300,
        // width: 300,
        // backgroundColor: 'black',
        
    },

    price:{
      color: '#156156',
      fontSize: 20,
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      left:10,
    },

    orderButton:{
      backgroundColor: '#156156',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      position: 'absolute',
      bottom: 10,
      right: 10,
    },

    orderText:{
      color: 'white',
    },

    greenSquare:{
        width: 350,
        height: 350,
        backgroundColor: 'green',
        borderWidth: 2, 
        borderColor: 'white',   
        position: 'relative',
        justifyContent: 'center', 
      alignItems: 'center',

    },

    blueSquare:{
        width: 350,
        height: 350,
        backgroundColor: 'blue',
        marginTop: 40,
        borderWidth: 2, 
        borderColor: 'white',
      position: 'relative',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    redSquare:{
        width: 350,
        height: 350,
        backgroundColor: 'red',
        marginTop: 40,
        borderWidth: 2, 
        borderColor: 'white',
        position: 'relative',
        justifyContent: 'center', 
      alignItems: 'center',
    },
    yellowSquare:{
        width: 350,
        height: 350,
        backgroundColor: 'yellow',
        marginTop: 40,
        marginBottom: 40,
        borderWidth: 2, 
        borderColor: 'white',
        position: 'relative',
        justifyContent: 'center', 
        alignItems: 'center',
    },

    aboutButton: {
        backgroundColor: "black",
        padding: (10,50),
        color:"fff",
       
    },
})