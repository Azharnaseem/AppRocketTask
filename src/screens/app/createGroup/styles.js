import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  headerContainer: {
    paddingVertical: height(2),
    marginLeft: width(5),
    marginBottom: height(3),
  },

  nameText: {
    color: AppColors.black,
    fontSize: width(6),
    fontWeight: "400",
  },
  itemsText: {
    color: AppColors.black,
    fontSize: width(4),
    fontWeight: "300",
    paddingVertical: height(2),
    marginLeft: width(1),
  },
  desText: {
    color: AppColors.black,
    fontSize: width(7),
    fontWeight: "300",
    paddingHorizontal: height(2.5),
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    paddingHorizontal: width(5),
  },
});
export default styles;
