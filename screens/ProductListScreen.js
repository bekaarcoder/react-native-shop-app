import React from "react";
import { FlatList, Text, View } from "react-native";
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

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={availableProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            addToCartHandle={() => addToCartHandle(item)}
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
