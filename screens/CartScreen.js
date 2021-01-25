import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotal, items } = cart;

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.priceTotal}>${cartTotal.toFixed(2)}</Text>
        </Text>
        <Button title="Order Now" disabled={items.length === 0} />
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.header}>Cart Items</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.itemDetail}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <View style={styles.itemFooter}>
                  <Text>Qty: {item.quantity}</Text>
                  <TouchableOpacity>
                    <MaterialIcons name="delete" size={24} color="#d7263d" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryText: {
    fontFamily: "RobotoBold",
    fontSize: 24,
  },
  priceTotal: {
    color: "#d1345b",
  },
  header: {
    fontFamily: "RobotoBold",
    fontSize: 24,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    flexGrow: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  itemDetail: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: 18,
  },
  price: {
    fontFamily: "RobotoBold",
    color: "#d1345b",
    fontSize: 16,
    marginVertical: 5,
  },
  itemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default CartScreen;
