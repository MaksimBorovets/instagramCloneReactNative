import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProfilePicture from "./ProfilePicture";
import { useNavigation } from "@react-navigation/native";

const UserStoryPreview = (props) => {
  const {
    story: {
      user: { imageUri, name, id},
    },
  } = props;

  const onPress = () => {
    navigation.navigate("Story", {userId: id});
  };

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <ProfilePicture uri={imageUri} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name} >{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;

const styles = StyleSheet.create({

  name: {
    justifyContent: 'center',
    textAlign:"center",
    width:90,
  },
});
