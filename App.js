import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Shop App</Text>
      </View>
    </Provider>
  );
};

export default App;
