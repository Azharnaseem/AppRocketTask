import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    height: height(70),
    backgroundColor: AppColors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: AppColors.black,
    fontWeight: "400",
    fontSize: width(8),
    marginBottom: height(2),
    alignSelf: "flex-start",
    marginLeft: width(5),
    marginTop: height(6),
  },
  inputContainer: {
    height: height(30),
    marginVertical: height(4),
    justifyContent: "space-between",
  },
  btnStyle: {
    width: width(30),
    alignSelf: "flex-end",
    marginTop: height(5),
  },
});
export default styles;
