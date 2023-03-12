import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import SVGIcon from "~assets/svg";
import { ScreenWrapper } from "~components";

import ScreenNames from "~routes/routes";
import CommonStyles from "~utills/CommonStyles";
import styles from "./styles";
export default function Home({ navigation, route }) {
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState();
  const API_KEY = "b0311bc7a7421d3be0c1fd3e79118bce";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${31.582045}&lon=${74.329376}&appid=${API_KEY}`;
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
    tempChange();
  }, []);
  const tempChange = () => {
    let Celsius = weatherData?.main?.temp - 273.15;
    // console.log("=========================", parseInt(Celsius));
    setTemperature(parseInt(Celsius));
  };
  // console.log("=========================", weatherData);
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <View style={styles.timeAndDateContainer}>
          <Text style={styles.timeText}>
            {dayjs(new Date()).format("h:mm A")}
          </Text>
          <Text style={styles.dateText}>
            {dayjs(new Date()).format(" MMMM DD, YYYY")}
          </Text>
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
            {temperature} °C <SVGIcon.Refresh />
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
          <Pressable
            style={{ alignSelf: "flex-end" }}
            onPress={() => navigation.navigate(ScreenNames.SEARCHSCREEN)}
          >
            <Text style={styles.viewInboxText}>View Inbox</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}
