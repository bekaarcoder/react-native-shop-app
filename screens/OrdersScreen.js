import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import moment from "moment";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);

  const getReadableDate = (date) => moment(date).format("MMMM Do YYYY, h:mm a");

  const getReadableId = (date) =>
    moment(Date.parse(date)).utc().valueOf().toString();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Orders</Text>
      <View style={styles.itemsContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItemContainer}>
              <Text style={styles.orderId}>
                Order #{getReadableId(item.id)}
              </Text>
              <Text style={styles.orderDate}>{getReadableDate(item.date)}</Text>
              <Text style={styles.summaryText}>
                Order Total:{" "}
                <Text style={styles.priceTotal}>${item.total.toFixed(2)}</Text>
              </Text>
              {item.items.map((order) => (
                <View style={styles.listItem} key={order.id}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: order.imageUrl }}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={styles.itemDetail}>
                    <Text style={styles.title}>{order.title}</Text>
                    <Text style={styles.price}>${order.price}</Text>
                    <Text style={styles.author}>{order.author}</Text>
                    <Text>Qty: {order.quantity}</Text>
                  </View>
                </View>
              ))}
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
    flex: 1,
  },
  orderId: {
    fontFamily: "RobotoBold",
    fontSize: 20,
  },
  orderDate: {
    marginVertical: 5,
  },
  summaryText: {
    fontFamily: "RobotoBold",
    fontSize: 24,
  },
  priceTotal: {
    color: "#d1345b",
  },
  itemsContainer: {
    flex: 1,
  },
  orderItemContainer: {
    marginBottom: 15,
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

export default OrdersScreen;
