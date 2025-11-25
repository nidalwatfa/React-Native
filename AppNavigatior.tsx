import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import DashboardScreen from "../screens/DashboardScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}
