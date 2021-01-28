import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopNavigator from "./routes/ShopNavigator";
import {
  useFonts,
  Roboto_400Regular as Roboto,
  Roboto_700Bold as RobotoBold,
} from "@expo-google-fonts/roboto";
import OrderNavigator from "./routes/OrderNavigator";
import { Entypo } from "@expo/vector-icons";
import AdminNavigator from "./routes/AdminNavigator";

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator initialRouteName="Shop">
          <Drawer.Screen
            name="Shop"
            component={ShopNavigator}
            options={{
              drawerIcon: () => <Entypo name="shop" size={22} color="black" />,
            }}
          />
          <Drawer.Screen
            name="Order"
            component={OrderNavigator}
            options={{
              drawerIcon: () => <Entypo name="list" size={22} color="black" />,
            }}
          />
          <Drawer.Screen
            name="Admin"
            component={AdminNavigator}
            options={{
              drawerIcon: () => <Entypo name="user" size={22} color="black" />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
