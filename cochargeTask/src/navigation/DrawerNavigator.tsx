import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen/HomeScreen"; // import the HomeScreen component
import MovieListScreen from "../screens/MovieListScreen"; // import MovieListScreen component

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* Ensure the names are unique */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Movies" component={MovieListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
