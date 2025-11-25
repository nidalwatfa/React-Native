import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Icon name="settings" size={50} color={colors.primary} />
      <Text style={globalStyles.title}>الإعدادات ⚙️</Text>

      <View style={styles.option}>
        <Text style={styles.label}>الوضع الليلي</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? colors.primary : "#ccc"}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.label}>الإشعارات</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          thumbColor={notifications ? colors.secondary : "#ccc"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  },
  label: {
    fontSize: 18,
    color: colors.text
  }
});
