import React, {useRef, useState} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from "react-native";
import posts from '../../data/posts.json';
import FeedPost from "../../components/FeedPost";


const HomeScreen = () => {
    const [activePostId, setActivePostId] = useState<string | null>(null);

    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChanged = useRef(
        ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
            if (viewableItems.length > 0) {
                setActivePostId(viewableItems[0].item.id);
            }
        });

    return (
      <FlatList
        data={posts}
          // @ts-ignore
        renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id}/>}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
  );
};

export default HomeScreen;
