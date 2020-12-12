import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/index";

import styles from "./styles.js";

const CarItem = (props) => {
  console.log(props);
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {` `}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primery"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Exsisting Inventory"}
          onPress={() => {
            console.warn("Exsisting order");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
