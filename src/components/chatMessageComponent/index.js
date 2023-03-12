import React from "react";
import { Text, View } from "react-native";
import { width } from "~utills/Dimension";
import styles from "./styles";
export default function ChatMessageComponent({ item, index }) {
  let data = item;
  return (
    <View style={styles.mainContainer}>
      {data.type == "sender" ? (
        <>
          <View style={styles.senderContainer}>
            <Text style={{ width: width(60) }}>{data.message}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.receiverContainer}>
            <Text style={{ width: width(60) }}>{data.message}</Text>
          </View>
        </>
      )}
    </View>
  );
}
