import React from "react";

import { Text, View, Pressable } from "react-native";
import styles from "./style.js";

const StyledButton = ({ type }) => {
  console.warn(type);
  const backgroundColor = type === "primery" ? "black" : "white";
  const textColor = type === "primery" ? "white" : "black";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("Hi");
        }}
      >
        <Text style={[styles.text, { color: textColor }]}> My button</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
