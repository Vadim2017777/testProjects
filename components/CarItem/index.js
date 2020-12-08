import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/index";

import styles from "./styles.js";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69.420</Text>
      </View>
      <StyledButton type="secondary" />
    </View>
  );
};

export default CarItem;
