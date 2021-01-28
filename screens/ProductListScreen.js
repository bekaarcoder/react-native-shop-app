import React from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/shop/ProductCard";
import { addToCart } from "../store/actions/cart";

const ProductListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products);
  const { availableProducts } = products;

  const dispatch = useDispatch();

  const addToCartHandle = (item) => {
    const addedItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      author: item.author,
    };
    dispatch(addToCart(addedItem));
  };

  const onSelect = (item) => {
    navigation.navigate("ProductDetails", {
      id: item.id,
      title: item.title,
    });
  };

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={availableProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} onSelect={() => onSelect(item)}>
            <View style={styles.buttonContainer}>
              <Button
                title="Add To Cart"
                onPress={() => addToCartHandle(item)}
              />
            </View>
          </ProductCard>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
});

export default ProductListScreen;
