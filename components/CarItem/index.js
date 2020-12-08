import React from "react";
import { styles } from "./styles";

import { Text, View, ImageBackground } from "react-native";

const CarItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../assets/images/ModelX.jpeg")}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.420</Text>
        </View>
      </View>
    </View>
  );
};

export default CarItem;
