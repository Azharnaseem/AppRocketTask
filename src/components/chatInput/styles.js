import { Platform, StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width(7),
    borderTopWidth: width(0.8),
    paddingVertical: height(2),
  },
  container: {
    backgroundColor: AppColors.white,
    borderWidth: width(0.5),
    width: width(70),
    borderColor: AppColors.black,
    paddingHorizontal: width(3),
    marginBottom: height(3),
    paddingVertical: height(1),
  },

  mainView: {
    width: width(70),
    marginLeft: width(2),
    paddingVertical: height(1),
  },
  inputText: {
    paddingVertical: 2,
    color: AppColors.black,
    fontSize: width(3.2),
    // paddingLeft: 0,
    width: "70%",
    fontWeight: "300",
  },
  icon: {
    marginBottom: height(2.5),
  },
});
export default styles;
