import React, { useRef, useState } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import SVGIcon from "~assets/svg";
import { Input, ScreenWrapper } from "~components";
import ScreenNames from "~routes/routes";
import CommonStyles from "~utills/CommonStyles";
import { width } from "~utills/Dimension";
import { checkItemData, groupData } from "~utills/dummyData";

import styles from "./styles";

export default function CreateGroup({ navigation, route }) {
  const [checkData, setCheckData] = useState(checkItemData);
  const showGroup = ({ item, index }) => {
    // console.log(index, "-----", item);
    return (
      <View style={styles.itemsContainer}>
        <Pressable
          onPress={() => {
            const newData = [...checkData];
            const index = newData.findIndex((obj) => obj.id === item.id);
            // console.log(newData[index].checked, "======", index);
            newData[index].checked = !newData[index].checked;
            setCheckData(newData);
          }}
        >
          {item?.checked ? <SVGIcon.checkFill /> : <SVGIcon.check />}
        </Pressable>
        <Text style={styles.itemsText}>{item?.name}</Text>
      </View>
    );
  };
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.nameText}>Create Group</Text>
          </View>
        );
      }}
    >
      <View style={styles.mainViewContainer}>
        <Input
          placeholder={"Group Name"}
          keyboardType={"name-phone-pad"}
          textinputViewStyle={{ width: width(90) }}
        />
        <Text style={styles.desText}>
          Select the members of yours new Group
        </Text>
        <FlatList
          data={checkData}
          renderItem={showGroup}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={CommonStyles.paddingBottom_2}
        />
      </View>
    </ScreenWrapper>
  );
}
