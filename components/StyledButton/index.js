import React from "react";

import { Text, View, Pressable } from "react-native";
import styles from "./style.js";

const StyledButton = ({ type, content, onPress }) => {
  console.warn(type);
  const backgroundColor = type === "primery" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primery" ? "white" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
