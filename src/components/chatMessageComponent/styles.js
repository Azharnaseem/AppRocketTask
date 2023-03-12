import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: height(2),
    paddingHorizontal: width(4),
  },
  senderContainer: {
    alignSelf: "flex-start",
    justifyContent: "center",
    borderRadius: width(5),
    backgroundColor: AppColors.lightGray,
    paddingHorizontal: width(3),
    paddingVertical: height(1.5),
  },
  receiverContainer: {
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: width(5),
    backgroundColor: AppColors.senderColor,
    paddingHorizontal: width(3),
    paddingVertical: height(1.5),
  },
});
export default styles;
