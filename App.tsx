import React from 'react';
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";


const App = () => {
  return (
    <SafeAreaView>
       <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {

  }

})

export default App;
