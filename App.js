import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./routes/ShopNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
