import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width(2),
    backgroundColor: AppColors.white,
    borderWidth: width(0.5),
    width: width(70),
    alignSelf: "center",
    paddingVertical: height(1.8),
  },

  text: {
    color: AppColors.black,
    fontSize: width(3.8),
    fontWeight: "bold",
  },
});
export default styles;
