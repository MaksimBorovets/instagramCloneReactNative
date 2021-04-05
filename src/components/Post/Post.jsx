import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ADIcon from "react-native-vector-icons/AntDesign";
import DoubleClick from "react-native-double-click";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FAIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Post = ({ post }) => {
  const [liked, setLiked] = React.useState(false);

  const onDoubleClick = () => {
      setLiked(true)
  }

  const likeButton = () => {
    if (liked === false) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };
  return (
    <>
      <View>
        <Header imageUri={post.user.imageUri} name={post.user.name} />
        <DoubleClick onClick={onDoubleClick}>
          <Body imageUri={post.imageUri} />
        </DoubleClick>

        <View style={styles.iconsContainer}>
          <>
            <View style={styles.leftIcons}>
              <TouchableOpacity onPress={likeButton}>
                {!liked ? (
                  <ADIcon name="hearto" size={30} color={'#545454'} />
                ) : (
                  <ADIcon name="heart" size={30} color={'#e73838'} />
                )}
              </TouchableOpacity>
              <FontistoIcon name="comment" size={26} color={'#545454'} />
              <IoniconsIcon name="paper-plane-outline" size={26} color={'#545454'} />
            </View>
          </>
          <View style={styles.rightIcons}>
            <FAIcon name="bookmark-o" size={26}  color={'#545454'} />
          </View>
        </View>

        <Footer
          postedAt={post.postedAt}
          caption={post.caption}
          likesCount={post.likesCount}
        />
      </View>
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  leftIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 110,
  },
  rightIcons: {},
});
