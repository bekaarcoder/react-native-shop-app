import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductListScreen}
        options={{ title: "All Products" }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
