import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import { Image, View } from "react-native";
import logo from '../assets/images/logo.png'
import StoryScreen from "../screens/StoryScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";




const HomeStack = createStackNavigator();


const HomeRoutes = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerLeft: () => (
            <>
            <View style={{marginLeft: 10}}>
            <Feather name={"camera"} size={27} color={'black'} />
            </View>
          </>
          ),
          headerTitle: ()=> (
            <>
            <Image resizeMode="contain" style={{width: 135, height: 50}} source={logo}/>
            </>
          ),
          headerRight: () => (
            <>
            <View style={{marginRight: 10}}>
            <Ionicons name={"paper-plane-outline"} size={27} color={'black'} />
            </View>
          </>
          ),
        }}
      />
    </HomeStack.Navigator>
)

export default HomeRoutes;
