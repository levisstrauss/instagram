import React from 'react';
import { StyleSheet, FlatList, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";


const App = () => {
  return (
    <View style={styles.app}>
       <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 25,
  }

})

export default App;
