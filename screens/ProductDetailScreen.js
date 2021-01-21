import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Ratings from "../components/shop/Ratings";

const ProductDetailScreen = ({ route }) => {
  const { id, title } = route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === id)
  );
  const { author, imageUrl, rating } = selectedProduct;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          resizeMethod="scale"
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
      <Ratings rating={rating} />
      <View style={styles.cartButton}>
        <Button title="Add To Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    fontFamily: "Roboto",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 18,
    fontFamily: "RobotoBold",
  },
  author: {
    textAlign: "center",
    fontSize: 20,
  },
  cartButton: {
    marginVertical: 15,
    alignItems: "center",
  },
});

export default ProductDetailScreen;
