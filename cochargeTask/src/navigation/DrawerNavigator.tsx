import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import { useTheme } from "styled-components/native";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ onToggleTheme, isDarkTheme }) => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.cardBackground,
        },
        headerTintColor: theme.text,
        drawerStyle: {
          backgroundColor: theme.cardBackground,
        },
        drawerActiveTintColor: theme.text,
        drawerInactiveTintColor: theme.text,
        headerRight: () => (
          <Ionicons
            name={isDarkTheme ? "sunny" : "moon"}
            size={24}
            color={theme.text}
            onPress={onToggleTheme}
            style={{ marginRight: 20 }}
          />
        ),
      }}
    >
      <Drawer.Screen
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        name="Splash" component={SplashScreen} />
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      >
        {() => <HomeScreen />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
