import React, { forwardRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import SVGIcon from "~assets/svg";
import AppColors from "~utills/AppColors";
import styles from "./styles";

const Input = (
  {
    placeholder,
    onChangeText,
    keyboardType = "default",
    secureTextEntry = false,
    textInputStyle = {},
    textinputViewStyle = {},
    maxLength,
    numberOfLines,
    editable = true,
    multiline = false,
    returnKeyType,
    onPressIn,
    value,
    onSubmitEditing,
    placeholderTextColor = AppColors.black,
    showIcon = false,
    textInputCon,
  },
  ref
) => {
  return (
    <View>
      <View style={[styles.container, textinputViewStyle]}>
        <View style={[styles.textInputView, textInputCon]}>
          {showIcon && <SVGIcon.search />}
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            style={[styles.input, textInputStyle]}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            editable={editable}
            numberOfLines={numberOfLines}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
            ref={ref}
            returnKeyType={returnKeyType}
            onPressIn={onPressIn}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
      </View>
    </View>
  );
};

export default forwardRef(Input);
