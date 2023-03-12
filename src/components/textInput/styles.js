import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  container: {
    height: height(6),
    width: width(80),
    alignSelf: "center",
    paddingHorizontal: width(4),
    borderWidth: width(0.5),
  },
  textInputView: {
    alignItems: "flex-start",
    // justifyContent: "spa",
    // backgroundColor: "green",
  },
  input: {
    fontSize: width(3.8),
    color: AppColors.black,
    height: height(6),
    // backgroundColor: "red",
    width: width(70),
  },
});
export default styles;
