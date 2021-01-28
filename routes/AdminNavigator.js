import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProductsScreen from "../screens/UserProductsScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/ui/CustomHeaderButton";
import EditProductScreen from "../screens/EditProductScreen";

const Stack = createStackNavigator();

const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          headerTitle: "Your Products",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="md-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add"
                iconName="md-create"
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{ title: "Edit Product" }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
