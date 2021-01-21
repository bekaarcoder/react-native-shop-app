import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Ratings = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesome name="star" size={24} color="#f5b700" key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <FontAwesome name="star-half-empty" size={24} color="#f5b700" key={i} />
      );
    } else {
      stars.push(
        <FontAwesome name="star-o" size={24} color="#f5b700" key={i} />
      );
    }
  }

  return <View style={styles.ratingContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 12,
  },
});

export default Ratings;
