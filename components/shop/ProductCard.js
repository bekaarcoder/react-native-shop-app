import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductCard = ({ item, onViewDetail, addToCartHandle }) => {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={onViewDetail}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>by {item.author}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add To Cart" onPress={addToCartHandle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    shadowColor: "#aaa",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginVertical: 15,
    width: "45%",
  },
  imageContainer: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  author: {
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  price: {
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
});

export default ProductCard;
