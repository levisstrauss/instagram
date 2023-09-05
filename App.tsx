import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from "./src/theme/fonts";
import colors from "./src/theme/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://3.bp.blogspot.com/-_bEuWkDoh4M/WlnaJ5rrFsI/AAAAAAAAAJU/s2cWMTglbp0OEpI7cdpvDQsAf3IzOG1agCLcBGAs/s1600/batman.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>vadimnotjustdev</Text>
        <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
      </View>


      {/* Content */}
      <Image
        source={{
         uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by {' '}
          <Text style={styles.bold}>lgrinevicius</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* Post Description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>vadimnotjustdev</Text>{' '}
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>vadimnotjustdev</Text>{' '}
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          </Text>
          <AntDesign
            name={'hearto'}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Posted date */}
        <Text>19 december, 2023</Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal:5,
  },
  text: { color: colors.black, lineHeight: 18},
  bold: { fontWeight: fonts.weight.bold},
  commentText: { color: colors.black, flex: 1 ,  lineHeight: 18},
  comment: { flexDirection: 'row', alignItems: 'center'},
})

export default App;
