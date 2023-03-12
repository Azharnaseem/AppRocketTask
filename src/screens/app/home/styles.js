import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeAndDateContainer: {
    width: width(98),
    paddingVertical: height(6),
    alignItems: "center",
    justifyContent: "center",
    borderColor: AppColors.black,
    borderWidth: width(0.6),
  },
  calendarViewCon: {
    flexDirection: "row",
    width: width(50),
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeText: {
    color: AppColors.black,
    fontWeight: "500",
    fontSize: width(7),
    marginBottom: height(1),
  },
  dateText: {
    color: AppColors.gray,
    fontWeight: "500",
    fontSize: width(5),
    marginBottom: height(4),
  },
  tempText: {
    color: AppColors.black,
    fontWeight: "500",
    fontSize: width(7),
    marginTop: height(3),
    marginBottom: height(1),
  },
  contactText: {
    color: AppColors.black,
    alignSelf: "flex-start",
    paddingLeft: width(4),
    fontWeight: "bold",
    fontSize: width(7),
    marginBottom: height(2),
  },
  messageTextcontainer: {
    width: width(70),
    alignSelf: "flex-start",
    paddingLeft: width(4),
  },
  viewInboxText: {
    paddingRight: width(4),
    fontWeight: "bold",
    fontSize: width(4),
    color: AppColors.blue,
    textDecorationLine: "underline",
  },
});
export default styles;
