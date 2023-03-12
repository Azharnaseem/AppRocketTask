import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  headerContainer: {
    paddingVertical: height(1.5),
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: width(5),
    width: width(100),
    borderWidth: width(0.6),
    elevation: 2,
  },
  nameText: {
    color: AppColors.black,
    fontSize: width(6),
    fontWeight: "400",
  },
});
export default styles;
