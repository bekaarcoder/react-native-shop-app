import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const EditProductScreen = ({ navigation, route }) => {
  const productId = route.params && route.params.productId;

  const product = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );

  const [title, setTitle] = useState(product ? product.title : "");
  const [author, setAuthor] = useState(product ? product.author : "");
  const [image, setImage] = useState(product ? product.imageUrl : "");
  const [rating, setRating] = useState(product ? product.rating : "");
  const [price, setPrice] = useState(product ? product.price : "");

  const submitHandler = useCallback(() => {
    console.log("submitting");
  }, []);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Author</Text>
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={image}
            onChangeText={(text) => setImage(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Rating</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={rating.toString()}
            onChangeText={(text) => setRating(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={price.toString()}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "RobotoBold",
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: "#324376",
    borderWidth: 1,
    fontSize: 22,
    borderRadius: 6,
  },
});

export default EditProductScreen;
