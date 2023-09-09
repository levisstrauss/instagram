import fonts from "../../theme/fonts";
import colors from "../../theme/colors";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  icon: {
    marginHorizontal:5,
  },
  text: {
    color: colors.black,
    lineHeight: 18
  },
  bold: {
    fontWeight: fonts.weight.bold
  },
  commentText: {
    color: colors.black,
    flex: 1 ,
    lineHeight: 18
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})
