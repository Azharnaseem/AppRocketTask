import React, { useRef, useState } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import { Input, ScreenWrapper } from "~components";
import ScreenNames from "~routes/routes";
import CommonStyles from "~utills/CommonStyles";
import { groupData } from "~utills/dummyData";

import styles from "./styles";

export default function SearchScreen({ navigation, route }) {
  const showGroup = ({ item, index }) => {
    // console.log(index, "-----", item);
    return (
      <Pressable
        onPress={() => {
          navigation.navigate(ScreenNames.CHAT, { name: item?.name });
        }}
      >
        <Text style={styles.itemsText}>{item?.name}</Text>
      </Pressable>
    );
  };
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <View>
            <Input
              placeholder={"Search Contacts"}
              showIcon
              textinputViewStyle={styles.textInputContainerStyle}
              textInputCon={styles.textInputContainer}
              keyboardType={"name-phone-pad"}
            />
            <View style={styles.linkTextCon}>
              <Pressable
                onPress={() => navigation.navigate(ScreenNames.CREATEGROUP)}
              >
                <Text style={styles.viewInboxText}>Add a new Group</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate(ScreenNames.CHAT)}>
                <Text style={styles.viewInboxText}>Send Broadcost</Text>
              </Pressable>
            </View>
          </View>
        );
      }}
    >
      <View style={styles.mainViewContainer}>
        <FlatList
          data={groupData}
          renderItem={showGroup}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={CommonStyles.paddingBottom_2}
        />
      </View>
    </ScreenWrapper>
  );
}
