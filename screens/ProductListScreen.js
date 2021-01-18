import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../components/shop/ProductCard";

const ProductListScreen = () => {
  const products = useSelector((state) => state.products);
  const { availableProducts } = products;

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={availableProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
};

export default ProductListScreen;
