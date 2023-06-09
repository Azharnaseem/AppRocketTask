import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { Login, SignUp, StartScreen } from "~screens/auth";
import { Loader } from "~components";
import ScreenNames from "./routes";
import { Chat, CreateGroup, HomeScreen, SearchScreen } from "~screens/app";
import { selectIsLoggedIn } from "~redux/slices/user";
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.STARTSCREEN}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen
            name={ScreenNames.STARTSCREEN}
            component={StartScreen}
          />
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
          <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          <Stack.Screen name={ScreenNames.CHAT} component={Chat} />
          <Stack.Screen
            name={ScreenNames.CREATEGROUP}
            component={CreateGroup}
          />
          <Stack.Screen
            name={ScreenNames.SEARCHSCREEN}
            component={SearchScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
