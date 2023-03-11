import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, Input, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { erroMessage } from "~utills/Methods";
export default function SignUp({ navigation, route }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const passRef = useRef();
  const onSubmitSignUp = () => {
    if (name == "") {
      erroMessage("Please enter email");
      return;
    } else if (password == "") {
      erroMessage("Please enter password");
      return;
    } else {
      dispatch(setAppLoader(true));
      try {
        setTimeout(() => {
          dispatch(setIsLoggedIn(true));
          dispatch(
            setUserMeta({
              name: name,
              password: password,
            })
          );
          dispatch(setAppLoader(false));
        }, 600);
      } catch (error) {
        dispatch(setAppLoader(false));
        erroMessage("SomeThings Failed");
      }
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder={"User Name"}
            value={name}
            onChangeText={(name) => setName(name)}
            keyboardType={"name-phone-pad"}
            onSubmitEditing={() => passRef.current.focus()}
            returnKeyType={"next"}
          />
          <Input
            placeholder={"Password"}
            value={password}
            keyboardType={"visible-password"}
            onChangeText={(password) => setPassword(password)}
            ref={passRef}
            returnKeyType={"done"}
            secureTextEntry={true}
          />
          <Button
            title={"Sign me Up!"}
            onPress={() => onSubmitSignUp()}
            containerStyle={styles.btnStyle}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
