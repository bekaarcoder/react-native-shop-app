import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import ProductCard from "../components/shop/ProductCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteProduct } from "../store/actions/product";
import { removeFromCart } from "../store/actions/cart";

const UserProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products);
  const { userProducts } = products;

  const dispatch = useDispatch();

  const onSelect = (item) => {
    navigation.navigate("EditProduct", {
      id: item.id,
    });
  };

  const onHandleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(removeFromCart(id));
  };

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        data={userProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} onSelect={() => onSelect(item)}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => onSelect(item)}>
                <FontAwesome5 name="edit" size={24} color="#3f6c51" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onHandleDelete(item.id)}>
                <MaterialIcons name="delete" size={24} color="#d7263d" />
              </TouchableOpacity>
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
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 8,
  },
});

export default UserProductsScreen;
