import React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import FeedPost from "./src/components/FeedPost";

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
       <FeedPost />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }

})

export default App;
