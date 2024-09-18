import {View, Text, Stack } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {Colors} from "../../constants/Colors"

export default function _layout() {
    return (
        
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.links 
        }}>
            <Tabs.Screen 
            name = "home"
            options = {{
                title:"Starbucks",
                tabBarIcon:({color}) => <Ionicons name="home" size={24}  
                color = {color}/>,
                headerStyle: {
                    backgroundColor: '#156156', // Header background color
                  },
                  
                

            }                
            }/>
            <Tabs.Screen 
            name = "products" 
            options={{
                title: "Buy Products!",
                tabBarIcon:({color}) => <Ionicons name="bag-check" size={24}  

                color = {color} />,
                headerStyle: {
                    backgroundColor: '#156156', // Header background color
                  },
            }
            }
            />
            <Tabs.Screen 
            name = "contact"
            options={{
                title: "Contact Page",
                tabBarIcon:({color}) => <Ionicons name="call" size={24} 
                color = {color}/>,
                headerStyle: {
                    backgroundColor: '#156156', // Header background color
                  },
            }} />
            
        </Tabs>
        
    );
}

