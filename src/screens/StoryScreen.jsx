import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import storiesData from "../assets/data/stories.js";
import ProfilePicture from "../components/ProfilePicture.jsx";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const StoryScreen = () => {
  const [userStories, setUserStories] = React.useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = React.useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  const { SWIPE_UP, SWIPE_DOWN } = swipeDirections;

  React.useEffect(() => {
    const userStories = storiesData.find(
      (storyData) => storyData.user.id === userId
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
  };
  const navigateToPrevUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const onSwipeUp = () => {
    navigation.navigate("Home");
  };

  const onSwipeDown = () => {
    navigation.navigate("Home");
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  const activeStory = userStories.stories[activeStoryIndex];

  return (
     <GestureRecognizer onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown}>
     <SafeAreaView style={styles.container}>
     
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={handlePress}
        >
          <ImageBackground
            source={{ uri: activeStory.imageUri }}
            style={styles.image}
          >
            <View style={styles.userInfo}>
              <ProfilePicture size={50} uri={userStories.user.imageUri} />
              <Text style={styles.userName}>{userStories.user.name}</Text>
              <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.cameraButton}>
                <Feather name={"camera"} size={30} color={"white"} />
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  editable
                  placeholder="Send message"
                  placeholderTextColor={"white"}
                  style={styles.textInput}
                />
              </View>
              <View style={styles.messageButton}>
                <Ionicons
                  name={"paper-plane-outline"}
                  size={30}
                  color={"white"}
                />
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    </GestureRecognizer>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  postedTime: {
    color: "#808080",
    marginLeft: 10,
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    fontWeight: "700",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
  },
  messageButton: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "100%",
    color: "white",
    fontSize: 16,
  },
});
