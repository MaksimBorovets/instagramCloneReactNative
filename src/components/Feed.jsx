import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "./Post/Post";
import Stories from "./UserStoriesPreview";

const data = [
  {
    id:'1',
    user: {
      imageUri:
        "data:image/jpeg;base64,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",
      name: "Khabib Nurmagomedov",
    },
    imageUri:
      "https://preview.redd.it/ce4ngm20znv51.png?auto=webp&s=d19a68dd8fdb0392c1460aa2ed5d3775670ab4a1",
    caption: "Undisputed & Undefeated 🦅",
    likesCount: "33K",
    postedAt: "02.04.2021 15:15",
  },
    // /////////////////////////////////////////

  {
    id:'2',
    user: {
      imageUri:
        "https://images2.imgbox.com/bb/59/yIyV6KGT_o.jpg",
      name: "Kendall Jenner",
    },
    imageUri:
      "https://www.wmj.ru/imgs/2019/11/01/13/3638123/6fc8d68f354d46aec33935071e9b461d2fd01530.jpg",
    caption: "🥰🥰🥰",
    likesCount: "2,5M",
    postedAt: "23.03.2021 15:15",
  },
    // /////////////////////////////////////////

  {
    id:'3',
    user: {
      imageUri:
        "https://static.toiimg.com/thumb/msid-67937639,imgsize-103693,width-800,height-600,resizemode-75/67937639.jpg",
      name: "Ariana Grande",
    },
    imageUri:
      "https://i.pinimg.com/originals/00/ea/83/00ea83ab0dc62e07df668e8a43a87a50.jpg",
    caption: "LoveUAll 💋",
    likesCount: "21M",
    postedAt: "02.04.2019 01:13",
  },
// ///////////////////////////////////////
  {
    id:'4',
    user: {
      imageUri:
        "https://flytothesky.ru/wp-content/uploads/2019/08/5-20.jpg",
      name: "Dwayne Johnson",
    },
    imageUri:
      "https://storage.myseldon.com/news_pict_37/37320E86A0BD79FD7FD98E5CD3CC0B02",
    caption: "Go hard or go HOME 💪",
    likesCount: "7M",
    postedAt: "01.01.2021 05:05",
  },
// ///////////////////////////////////////
  {
    id:'5',
    user: {
      imageUri:
        "https://graziamagazine.com/wp-content/uploads/2020/04/portada7-2-Cropped.jpg?resize=1155%2C650",
      name: "Margot Robbie",
    },
    imageUri:
      "https://m.media-amazon.com/images/M/MV5BZWRkZjNiZWEtYjZiOC00MWEwLWIxOTctN2YzZjlmNzI5MDk1XkEyXkFqcGdeQXVyMzkyOTg1MzE@._V1_.jpg",
    caption: "She-Wolf from Wall Street 💄",
    likesCount: "45M",
    postedAt: "15.04.2018 13:46",
  },
// ///////////////////////////////////////
  {
    id:'6',
    user: {
      imageUri:
        "http://www.etoday.ru/assets/2015/10/21/Beyonce-Beat-Magazine-Winter-2015-Cover-Pictures03.jpg",
      name: "Beyonce",
    },
    imageUri:
      "https://showbi.ru/upload/2019/07/19/20190719151712-186ac369.jpg",
    caption: "🦁 👑",
    likesCount: "33M",
    postedAt: "02.04.2021 15:15",
  },
  // /////////////////////////////////////////
];

const Feed = () => {
  return (
    <FlatList
    style={styles.container}
    data={data}
    ListHeaderComponent={Stories}
    renderItem={({item}) => <Post post={item}/>}
    keyExtractor={({id})=> id}
     />
  );
};

export default Feed;

const styles = StyleSheet.create({

});
