import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DiscoveryScreen from "../screens/DiscoveryScreen";
import NotificationScreen from "../screens/NotificationScreen";
import HomeScreen from "../screens/HomeScreen";

import HomeStackScreen from './home.routes'
import ProfileScreen from "../screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";



const Tab = createBottomTabNavigator();


const BottomHomeNavigator = () => (
 <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Foundation name={"home"} size={size} color={color} />;
            }
            if (route.name === "Discovery") {
              return <Feather name={"search"} size={size} color={color} />;
            }
            if (route.name === "Post") {
              return <Feather name={"plus-square"} size={size} color={color} />;
            }
            if (route.name === "Notification") {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === "Profile") {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={HomeStackScreen} />
        <Tab.Screen name="Post" component={HomeStackScreen} />
        <Tab.Screen name="Notification" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={HomeStackScreen} />
      </Tab.Navigator>
)

export default BottomHomeNavigator;