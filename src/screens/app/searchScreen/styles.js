import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainerStyle: {
    borderRadius: width(5),
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkTextCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(2),
    paddingVertical: height(2),
  },
  viewInboxText: {
    paddingRight: width(4),
    fontWeight: "bold",
    fontSize: width(4),
    color: AppColors.blue,
    textDecorationLine: "underline",
  },
  itemsText: {
    color: AppColors.black,
    fontSize: width(8),
    fontWeight: "300",
    paddingVertical: height(2),
  },
});
export default styles;
