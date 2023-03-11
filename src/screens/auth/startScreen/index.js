import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import CommonStyles from "~utills/CommonStyles";
import ScreenNames from "~routes/routes";
export default function StartScreen({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Button
          title={"Login"}
          containerStyle={CommonStyles.marginBottom_2}
          onPress={() => navigation.navigate(ScreenNames.LOGIN)}
        />
        <Button
          title={"SignUp"}
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
        />
      </View>
    </ScreenWrapper>
  );
}
