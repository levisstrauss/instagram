import React from 'react';
import { FlatList} from "react-native";
import posts from '../../data/posts.json';
import FeedPost from "../../components/FeedPost";


const HomeScreen = () => {
  return (
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
  );
};

export default HomeScreen;
