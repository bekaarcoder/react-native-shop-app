import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../components/shop/ProductCard";

const ProductListScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products);
  const { availableProducts } = products;

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={availableProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onViewDetail={() =>
              navigation.navigate("ProductDetails", {
                id: item.id,
                title: item.title,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default ProductListScreen;
