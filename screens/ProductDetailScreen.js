import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Ratings from "../components/shop/Ratings";
import { addToCart } from "../store/actions/cart";

const ProductDetailScreen = ({ route }) => {
  const { id, title } = route.params;

  const dispatch = useDispatch();

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === id)
  );
  const { author, imageUrl, rating, price } = selectedProduct;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, imageUrl, author }));
  };

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
        <Button title="Add To Cart" onPress={handleAddToCart} />
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
