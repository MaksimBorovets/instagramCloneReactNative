import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Feed from "../components/Feed"; 
import UserStoriesPreview from "../components/UserStoriesPreview";



const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Feed/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
