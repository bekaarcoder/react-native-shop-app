import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./routes/ShopNavigator";
import {
  useFonts,
  Roboto_400Regular as Roboto,
  Roboto_700Bold as RobotoBold,
} from "@expo-google-fonts/roboto";

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto,
    RobotoBold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
