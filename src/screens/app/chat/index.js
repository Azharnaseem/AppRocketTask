import React, { useRef, useState } from "react";
import { View, FlatList, Alert, Text } from "react-native";

import { ScreenWrapper } from "~components";
import ChatInput from "~components/chatInput";
import ChatMessageComponent from "~components/chatMessageComponent";
import CommonStyles from "~utills/CommonStyles";
import { messageData } from "~utills/dummyData";

import styles from "./styles";

export default function Chat({ navigation, route }) {
  const name = route?.params?.name;

  const [messages, setMessages] = useState(messageData);
  const flatListRef = useRef();
  const [sendMessageText, setSendMessageText] = useState("");
  const sendMessage = async (msg) => {
    try {
      if (sendMessageText == "") {
        Alert.alert("Please enter message");
      } else {
        let temp = [...messages];
        let pushdata = {
          id: "1",
          message: sendMessageText,
          type: "reciever",
        };

        temp.push(pushdata);
        setMessages(temp);
        setSendMessageText("");
        setTimeout(() => {
          flatListRef.current.scrollToEnd({ animated: true });
        }, 600);
      }
    } catch (error) {
      Alert.alert("some went wrong");
    }
  };

  const showMessage = ({ item, index }) => (
    <ChatMessageComponent item={item} index={index} />
  );
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.nameText}>
              {route?.params?.name ? route?.params?.name : "Contact 1"}
            </Text>
          </View>
        );
      }}
      footerUnScrollable={() => (
        <ChatInput
          value={sendMessageText}
          onChangeText={(text) => setSendMessageText(text)}
          onPressSend={sendMessage}
          multiline={true}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <FlatList
          data={messages}
          renderItem={showMessage}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          contentContainerStyle={CommonStyles.paddingBottom_2}
        />
      </View>
    </ScreenWrapper>
  );
}
