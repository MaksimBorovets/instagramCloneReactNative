import React from "react";
import { StyleSheet, FlatList } from "react-native";
import UserStoryPreview from "./UserStoryPreview";
import storiesData from "../assets/data/stories.js"



const UserStoriesPreview = () => {
  return (
    <FlatList
    style={styles.container}
      data={storiesData}
      keyExtractor={({ user:{id} }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <UserStoryPreview story={item} />
      )}
    />
  );
};

export default UserStoriesPreview;

const styles = StyleSheet.create({
    container:{
        marginBottom: 15,
    },
});
