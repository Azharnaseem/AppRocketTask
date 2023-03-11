import React from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SVGIcon from "~assets/svg";
import { Button, ScreenWrapper } from "~components";
import { setAppLoader } from "~redux/slices/config";
import { selectUserMeta, setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import CommonStyles from "~utills/CommonStyles";
import styles from "./styles";
export default function Home({ navigation, route }) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.timeAndDateContainer}>
          <Text style={styles.timeText}>7:51 PM</Text>
          <Text style={styles.dateText}>janurary 1st, 2022</Text>
          <View style={styles.calendarViewCon}>
            <SVGIcon.calender />
            <View>
              <Text>9:00 PM</Text>
              <Text>Meet before veterans</Text>
            </View>
          </View>
        </View>
        <View style={styles.timeAndDateContainer}>
          <SVGIcon.cloud />
          <Text style={styles.tempText}>
            7:51 PM <SVGIcon.Refresh />
          </Text>
          <View style={CommonStyles.rowJustifySpaceBtw}>
            <SVGIcon.MapMarker />
            <Text>Lohore, Pakistan</Text>
          </View>
        </View>
        <View style={styles.timeAndDateContainer}>
          <Text style={styles.contactText}>Contact 1</Text>

          <View style={styles.messageTextcontainer}>
            <Text style={styles.dateText}>
              This is contact's message,Mein in ko nhi chorun ga.Ma ab Khud ro
              rha hun
            </Text>
          </View>
          <Text style={styles.viewInboxText}>View Inbox</Text>

          {/* <Pressable> */}
          {/* <Text style={styles.viewInboxText}>View Inbox</Text> */}
          {/* </Pressable> */}
        </View>
        {/* <Text style={styles.title}>{userInfo?.name}</Text> */}
        {/* <Text style={styles.title}>{userInfo?.email}</Text> */}

        {/* <Button
          title={"Logout"}
          onPress={() => {
            dispatch(setAppLoader(true));
            setTimeout(() => {
              dispatch(setUserMeta(null));
              dispatch(setIsLoggedIn(false));
              dispatch(setAppLoader(false));
            }, 600);
          }}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
